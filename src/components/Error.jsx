function Error({children}) {
  return (
    <div className="text-center my-4 bg-red-500 text-white font-bold p-1 uppercase">
        {children}
    </div>
  )
}

export default Error