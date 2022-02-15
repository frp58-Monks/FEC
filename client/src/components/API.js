import configData from '../config/config.js';
const TOKEN = configData.token;
const CAMPUS = configData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

const getFullProductInfo = async (id) => (
  const route  = API + 'products/' + id;
  await axios.get(route, {headers: {authorization: TOKEN}})
);

const getFullProductInfo = (id, callback, errCB) => {
  const route  = API + 'products/' + id;
  axios
    .get(route, {headers: {authorization: TOKEN}})
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {errCB(err)})
};

const foo = (cb) => {
  if (err) {
    cb({ error: err })
  } else {
    cb({ data: myreturneddat})
  }
}

//later on
const callback = (err, result) => {
  if (evet.error) {
    setError(true);
    retrun
  }]


  ret
}