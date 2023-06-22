export const updown =(state = 0, action ) =>{
switch (action.type) {
    case "inc":
        return state + 1;
        break;
    case "dec":
        return state - 1;
        break;

    default:
        return state
        break;
}
}