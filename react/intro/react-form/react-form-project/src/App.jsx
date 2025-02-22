import { useForm } from "react-hook-form";
import './app.css';
function App() {
  const { register, handleSubmit, watch, formState: { errors ,isSubmitting} } = useForm();
async  function onSubmit(data){
    // API call ko simulate
    await new Promise((resolve =>setTimeout(resolve,5000)))
    console.log("Submitting the form",data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input 
        className={errors.FirstName ? 'input-error':""}
        {...register("FirstName",
          { 
            required: true,
            minLength:{value:3 , message:'Min length atleast 3'},
            maxLength:{value:6 , message:'Max length atmost 6'}
            } )} />
            {errors.FirstName && <p className="error-msg">{errors.FirstName.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name: </label>
        <input className={errors.FirstName ? 'input-error':""} {...register("MiddleName")} />
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name: </label>
        <input className={errors.FirstName ? 'input-error':""} {...register("LastName" , { 
          pattern: {
            value:/^[A-Za-z]+$/i ,
            message:"Last name is not as per rules"

          }
        })} />
        {errors.LastName && <p className="error-msg">{errors.LastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled = {isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />

    </form>

  )
}

export default App
