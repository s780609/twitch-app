const redirect_uri = 
//"https://hsutinghuan.ddns.net/Web1";
//`https://s780609.github.io/twitch-app`;
//`https://twitch-app-lac.vercel.app`;
`http://localhost:3000`;

const port = new URL(redirect_uri).port ? ":" + new URL(redirect_uri).port : "";
const pathname = new URL(redirect_uri).pathname == "/" ? "" : new URL(redirect_uri).pathname;
const parentDomain = new URL(redirect_uri).hostname // + pathname; //+ port //+ new URL(redirect_uri).pathname;

const initialState = {
    clientId: "87taxodv5s6tl484merlchj3rufwds",
    // this sevret is produced by twitch developer console
    clientSecret: "894hdhgzyzeoti5z33zn6nitctjvp7",
    accessToken: "",
    redirect_uri: redirect_uri,
    parentDomain: parentDomain,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "accessToken":
            return state = { ...state, accessToken: action.accessToken };
        default:
            return state = { ...state };
    }
}