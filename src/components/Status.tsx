type statusProp = {
status: "Loading" | "Success" | "Error";
}

 export const Status = (props: statusProp) => {
    let message
    if (props.status === "Loading") {
        message = "Loading..."
    } else if (props.status === 'Success') {
        message = "Success"
    } else if (props.status === "Error"){
        message = "error fetching data"
    }
  return (
    <div>Status - {message}</div>
  )
}
 
