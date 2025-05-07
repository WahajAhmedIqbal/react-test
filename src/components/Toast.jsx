const Toast = ({ message, visible }) => (
    <p className={`${visible ? 'top-6 opacity-100' : 'top-3.5 opacity-0'} py-2 px-7 -translate-x-1/2 left-1/2 fixed transition-all duration-150 ease-in z-[4] bg-white text-base rounded`}>
      {message}
    </p>
  );
  
  export default Toast;
  