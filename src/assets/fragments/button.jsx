import PropTypes from 'prop-types';
function Button (props) {
    const {text,type,variant}=props
    return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    type={type}>
    {text}
    
    </button>
    
    )
};
Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    variant: PropTypes.string 
  };
Button.defaultProps = {
    type: "submit",
    text: "Button",
    variant: "bg-black"
  };
export default Button