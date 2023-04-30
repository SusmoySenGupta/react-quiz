export default function Checkbox({ className, label, ...rest }) {
	return (
		<label className={className}>
			<input type="checkbox" {...rest} /> <span>{label}</span>
		</label>
	);
}
