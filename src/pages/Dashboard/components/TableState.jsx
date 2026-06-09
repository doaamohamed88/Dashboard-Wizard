export default function TableState({
  message,
  color = "text-slate-400",
}) {
  return (
    <tr>
      <td
        colSpan={4}
        className={`py-10 text-center ${color}`}
      >
        {message}
      </td>
    </tr>
  );
}