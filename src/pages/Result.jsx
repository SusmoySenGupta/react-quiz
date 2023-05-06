import _ from 'lodash';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summary from '../components/Summary';
import Spinner from '../components/ui/Spinner';
import useAnswers from '../hooks/useAnswers';
import useDocumentTitle from '../hooks/useDocumentTitle';

const EACH_QUESTION_POINT = 5;

export default function Result() {
	useDocumentTitle('Result');

	const navigate = useNavigate();
	const { videoID } = useParams();
	const { state } = useLocation() || {};
	const { qna } = state || {};

	const { answers, isLoading, isError } = useAnswers(videoID);

	if (!qna) {
		navigate(`/quiz/${videoID}`);
		return null;
	}

	const calculateScore = () => {
		if (!answers || !answers.length || !qna || !qna.length) return 0;

		let score = 0;

		answers.forEach((question, questionIndex) => {
			let correctIndexes = [];
			let userAnswers = [];

			question.options.forEach((option, answerIndex) => {
				if (option.correct) {
					correctIndexes.push(answerIndex);
				}
				if (qna[questionIndex].options[answerIndex].checked) {
					userAnswers.push(answerIndex);
					option.checked = true;
				}
			});

			if (_.isEqual(correctIndexes, userAnswers)) {
				score += 5;
			}
		});

		return score;
	};

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && isError && <p>Something went wrong...</p>}
			{!isLoading && !isError && answers && answers.length && (
				<>
					<Summary
						score={calculateScore()}
						noq={answers.length}
						questionPoint={EACH_QUESTION_POINT}
					/>
					<Analysis answers={answers} />
				</>
			)}
		</>
	);
}
