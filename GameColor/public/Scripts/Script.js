export function colors(func, str) {
    return func(str);
}
export function upper(txt) {
    return txt.toUpperCase();
}
function onMain() {
    console.log(colors(upper, "Learning TypeScript"));
}
onMain();
