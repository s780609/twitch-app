
//const [token, setToken] = useState("");

// const redirect_uri =
//     //   "http://localhost:3000"
//     `https://s780609.github.io`;

// const parent =
//     //"localhost"
//     `s780609.github.io`;

const redirect_uri = "http://localhost:3000";
//`https://s780609.github.io/twitch-app`;

const port = new URL(redirect_uri).port ? ":" + new URL(redirect_uri).port : "";
const pathname = new URL(redirect_uri).pathname == "/" ? "" : new URL(redirect_uri).pathname;
const parentDomain = new URL(redirect_uri).hostname + pathname; //+ port //+ new URL(redirect_uri).pathname;

const initialState = {
    clientId: "vr0gbze3cw6zvxavzvjjxokdydm7cj",
    clientSecret: "3x2oiag46esvkqhp99ah13q1cr3wyk",
    accessToken: "",
    redirect_uri: redirect_uri,
    parentDomain: parentDomain,
};

export default (state = initialState, action) => {
    switch (action.accessToken) {
        case "accessToken":
            return state = { ...state, token: action.accessToken };
        default:
            return state = { ...state };
    }
}