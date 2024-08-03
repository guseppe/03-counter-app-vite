import PropTypes from 'prop-types'
//const newMessage = 'Guseppe';
//const newMessage = [1,2,3,4];
const newMessage = {  //no se puede renderizar el objecto completo, puedo hacer con los propiedades o usar JSON.stringify()
  message: 'Guseppe',
  title: 'Rodriguez',
};
const getMessage = ()=>{
  return 'Hola Mundo';
}
// export const FirstApp = ({title = 'default value', subtitle}) => {
  export const FirstApp = ({title, subtitle}) => {
  //const newMessage = 'Guseppe'; //se puede colocar fuera (no es un elemnto global, pertenece a un mismo modulo) si la expresion no necesita ser recalculada al renderizar nuevamente
  // console.log(title); //es mas habitual desestructurar las props
  return (
    <> {/*Uso de un Fragment implicito*/}
      <h1>{title}</h1> 
      {/* <h1>{props.title}</h1> */}
      {/* <h1>{newMessage.message}</h1> */}
      {/* <h1>{getMessage()}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo'
}