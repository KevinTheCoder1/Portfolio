const spinner = require("../assets/spinner.gif")

function Spinner(): JSX.Element {
   return (
      <div className="w-100 mt-20">
         <img className="text-center mx-auto" src={spinner} alt="Loading..." style={{width: 180}}/>
      </div>
   )
}

export default Spinner
