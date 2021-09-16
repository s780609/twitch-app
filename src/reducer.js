const redirect_uri = 
//"https://hsutinghuan.ddns.net/Web1";
`https://s780609.github.io/twitch-app`;
//`http://localhost:3000`;

const port = new URL(redirect_uri).port ? ":" + new URL(redirect_uri).port : "";
const pathname = new URL(redirect_uri).pathname == "/" ? "" : new URL(redirect_uri).pathname;
const parentDomain = new URL(redirect_uri).hostname //+ pathname; //+ port //+ new URL(redirect_uri).pathname;

const initialState = {
    clientId: "vr0gbze3cw6zvxavzvjjxokdydm7cj",
    // this sevret is produced by twitch developer console
    clientSecret: "b1ew7n5ziqoxx1v5186x75nsvgbok0",
    accessToken: "",
    redirect_uri: redirect_uri,
    parentDomain: parentDomain,
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "accessToken":
            return state = { ...state, accessToken: action.accessToken };
        default:
            return state = { ...state };
    }
}