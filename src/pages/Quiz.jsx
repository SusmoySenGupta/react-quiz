import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Answers from '../components/Answers';
import MiniPlayer from '../components/MiniPlayer';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/ui/Spinner';
import { useAuth } from '../contexts/AuthContext';
import useQuestions from '../hooks/useQuestions';

const initialState = [];

const reducer = (state, action) => {
	switch (action.type) {
		case 'MAKE_QUESTIONS':
			action.payload.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});

			return action.payload;
		case 'ANSWER_QUESTION':
			const questions = _.cloneDeep(state);
			const { questionID, optionIndex, isChecked } = action.payload || {};
			questions[questionID].options[optionIndex].checked = isChecked;

			return questions;
		default:
			return state;
	}
};

export default function Quiz() {
	const navigate = useNavigate();
	const { videoID } = useParams();
	const { currentUser } = useAuth();
	const { state } = useLocation() || {};
	const { videoTitle } = state || {};

	const { questions, isLoading, isError } = useQuestions(videoID);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [qna, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: 'MAKE_QUESTIONS',
			payload: questions,
		});
	}, [questions]);

	const handleAnswerChange = (e, index) => {
		dispatch({
			type: 'ANSWER_QUESTION',
			payload: {
				questionID: currentQuestion,
				optionIndex: index,
				isChecked: e.target.checked,
			},
		});
	};

	const handlePreviousClick = () => {
		if (currentQuestion === 0) return;

		setCurrentQuestion((prev) => prev - 1);
	};

	const handleNextClick = () => {
		if (currentQuestion === qna.length - 1) return;

		setCurrentQuestion((prev) => prev + 1);
	};

	const handleSubmit = async () => {
		const { uid } = currentUser || {};
		const db = getDatabase();
		const resultRef = ref(db, `result/${uid}`);

		await set(resultRef, {
			[videoID]: qna,
		});

		navigate(`/result/${videoID}`, {
			state: {
				qna,
			},
		});
	};

	const progress =
		qna?.length > 0 ? ((currentQuestion + 1) / qna.length) * 100 : 0;

	return (
		<>
			{isLoading && <Spinner />}
			{isError && <div>Error loading Quizzes...</div>}

			{!isLoading && !isError && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion]?.title}</h1>
					<h4>Question can have multiple answers</h4>
					<Answers
						options={qna[currentQuestion]?.options}
						onChange={handleAnswerChange}
					/>
					<ProgressBar
						onPrev={handlePreviousClick}
						onNext={handleNextClick}
						onSubmit={handleSubmit}
						progress={progress}
					/>
					<MiniPlayer videoID={videoID} title={videoTitle} />
				</>
			)}
		</>
	);
}
