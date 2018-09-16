
import React from 'react';

const log = (num)=> console.log('This is the number ', num);


const ButtonInline = ({onClick, children}) => <Button type={'button'} className="button-inline" onClick={onClick}>{children}</Button>

const Button = ({onClick, type, className, children})=>  <div><button type={type} className={className} onClick={onClick}>{children}</button>


</div>
export default ButtonInline;
