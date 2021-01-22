import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
    const dispatch = useDispatch();



    const signIn = () => {

        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
            dispatch(login({
                username: result.user.displayName,
                profilePic:result.user.photoURL,
                id: result.user.uid
            }))
        }).catch((error) => alert(error.message));


    }

    return (
        <div className="login">


            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAArlBMVEX//AH///8AAAD//wH69wH29vbj4AH08QEODg7g3QHc3NyDg4Pu6wHm5ubU0gFtbW2fn59oaGhGRkaQjgBKSQGhnwGsrKy5ubnV1dWOjo4oJwAiIiJeXl4NDQA9PT3DwAEzMgB2dnbr6+vFxcWEggC3tQFpaAEUFACvrQGXl5dERAArKyugngHOzs59fAEtLAB0cwEZGRlUUwA+PQCWlAEiIQCmpqZAQEAeHQAYGAAvxuaFAAAD2ElEQVR4nO3c61faMBjHcZoHKMWCXAS8AyLepk7GnNv//48tSYtYLL3sTd3J9/PShnPq7yThSdJSqwEAAAAAAAAAAAAAAAAAAAAAAAAAAABVEK3qe/i/mMT8ZhA0fbIrTKQ7PFKxo2GX4AqQ2uhWJdyOagSXTeROpbijx2URPx6drf79eDIZ3/db8Vj1yW0vCaKQDtreu/ZB9LeA3PaQZhRaw0toHJBbBvHt8Dz2Pjm2Q5VxmkoedDbfGp9T0x3um770QGwpZGS6VGpqOjdzbURun9VNMu301PQ3g7lar/oevx7b2U72peZ5J/ryI91tl5zqXPan5nn68imx7bDFx0FWbKYMaZJbkl1UPWXF9mQXWVXf5xcjzzlj1I7SZ2JLEr0YPcuO7UwvTYktSb4rdZ4d27lS34ltx4VSh9mxHSp1UfVdfjWm2J1nxzan4N0hUs+rP6IKpM5+5YZOIgz9/NjMOsEPwxrJGeK/xFvfBXqb8cIO0nZHt9jcxk5vTLbnVP3s2A63Z1nOxyZLHcOq19NFWYG6TZ33eisWWTq2l3hvsjG+zOlt/cuxbWimN+dj+6FUKzuuXS2lfjgfm1nCd8qk1mFJr2ObmtOqErl1zCnW1PXYarI23429oqn1TOu186nVJLQ1xWWhDte5tI1DYtOrhJkq2OFsV1MzVgmGyE8bR86+0abe/cmaNCZNO8HlxWanNU5htuy+0SovtjMeBEmyZUjG2XLkhNIjSV6LFL2m0H0ltncyzN//MPq62TW5xewQVVf5sV0phuk76Zo0xvmped7YtOySW23T1woM0c0wpb+ZWtfMa2pQLDXPG5jWQ8crXpHurFRqcW4zp1+NkfCmyCFCyjhVN+4u56PxqdSvMql53q/oU0NHc4tTG5Ta2zU6A5dzs68hnC3KhmYszPJU+VX/B1Ww5dr8X0Iz5q4WcPY4/q3A2iDN1Zuzh/Nia4/53lcR9mvb5xpmTqa2eTNNreal5rfFfBV9ztUNS2mexg91lC13tVNXU7PvKr9GIaS81pfuOGr/6vb7zObnBArvfxh2D4SfHdDB2frtfjxZtDO/Vq/ai8n43tZrzodmyOZpSnPoN0nPbLJ9uI3HjWL139tMVCsluEnrQ4M/PC0ekfr1xYdc3nYqufbgw8WL6zqdbUMkDLrT5XAdD9UPq/tO/MjuericdoOQaS1BIuFzXMj1njqNRuepF/e0lzBuUPV9fk0iwVp9MgvIK4fI8k8ytNsloRUgMr3ZhnYzJbSC9BwWTEePj6NpwHRWivAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOr8BXGgMEmi371NAAAAAElFTkSuQmCC" alt=""/>
        
           <Button
           variant="outline"
           onClick={signIn}
           >
           Sign In 

           </Button>
        </div>
    )
}

export default Login
