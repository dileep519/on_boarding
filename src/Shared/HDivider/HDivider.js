import './HDivider.css';
export const HDivider = (props)=>{
    const activeClass = props.isActive ? 'horizontalDividerActive' : '';
    const completedClass = props.completed ? 'horizontalDividerCompleted' : '';
    const classes = `horizontalDivider ${activeClass} ${completedClass}`
    return(
        <div className={classes}></div>
    );
}