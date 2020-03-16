
export default ({document, winLink}) => props => (React => {let [vm,setVM] = React.useState(); React.useEffect(async () => {if(!vm)setVM(await (await winLink.SqueakJS).vm)})})(props.React)