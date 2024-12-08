const Button = (props) => {
  return (
    <div className="text-center">
        <button className="bg-slate-800 p-4 rounded-md text-gray-100 hover:bg-green-600">{props.text}</button>
    </div>
  )
}

export default Button