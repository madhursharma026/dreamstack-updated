import Link from 'next/link';
import Logo from "./media/logo.jpg";
import styles from '../styles/Login/Login.module.css'
import { useState } from 'react';

export default function login() {
    const [errorEmailPasswordLogin, setErrorEmailPasswordLogin] = useState('')
    const [errorGoogleLogin, setErrorGoogleLogin] = useState('')

    function loginWithEmailPassword(e) {
        e.preventDefault()
        setErrorGoogleLogin(false)
        setErrorEmailPasswordLogin(true)
    }

    function loginWithGoogle() {
        setErrorEmailPasswordLogin(false)
        setErrorGoogleLogin(true)
    }

    return (
        <div className={styles.loginScreen} style={{ background: "#E3F0FF", height: '100vh', }}>
            <div className={styles.loginContentBefore400PX}>
                <div className={`p-0 pt-4`}>
                    <div className={`${styles.ContainerWidth} ${styles.Section1}`}>
                        <div className="row">
                            <div className="d-xl-block d-none col-xl-6 text-xl-center" style={{ margin: 'auto' }}>
                                <h3><img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' /> <b>DREAMSTACK</b></h3>
                                <h3 className='mt-3'>Own Your Digital Presence</h3>
                                <img src="https://secure.newdream.net/newpanel/images/spot_illo-login.png" alt="#ImgNotFound" className='w-100' />
                                <p className='mt-3 text-center' style={{ maxWidth: '900px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.3px', fontSize: '1.46rem' }}>
                                    Grow your website faster by using
                                    <br />
                                    Dreamstack as your foundation.
                                </p>
                            </div>
                            <div className="col-xl-6 px-xl-5" style={{ textAlign: 'left' }}>
                                <div class="card w-100 p-xxl-5" style={{ boxShadow: '0 20px 35px rgba(0, 34, 69, 0.03), 0 20px 35px rgba(0, 0, 0, 0.06)' }}>
                                    <div class="card-body px-sm-5 px-4 py-5">
                                        <h3 className='d-sm-none d-block'><img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' /> <b>DREAMSTACK</b></h3>
                                        <h2 className='mt-sm-0 mt-4' style={{ lineHeight: '1', fontWeight: 'bolder' }}>Sign in to your account</h2>
                                        {errorEmailPasswordLogin ?
                                            <h6 className="p-4 mt-4" style={{ background: '#FFF4B6', borderLeft: '8px solid #FFDA00', color: '#434F58' }}>Email or password is incorrect.</h6>
                                            :
                                            <></>
                                        }
                                        {errorGoogleLogin ?
                                            <h6 className="p-4 mt-4" style={{ background: '#FFF4B6', borderLeft: '8px solid #FFDA00', color: '#434F58' }}>
                                                No account matches your Google email address! Please use Dreamstack credentials to log in or <Link href="#SignUp">sign up</Link> for one of our products.
                                            </h6>
                                            :
                                            <></>
                                        }
                                        <form className='mt-4' onSubmit={(e) => loginWithEmailPassword(e)}>
                                            <div class="mb-4">
                                                <label for="exampleInputEmail1" class="form-label" style={{ color: '#434F58' }}><b>Email</b></label>
                                                <input type="email" class="form-control py-2" id="exampleInputEmail1" placeholder='Email' required style={{ background: '#E3F0FF' }} />
                                            </div>
                                            <div class="mb-4">
                                                <label for="exampleInputPassword1" class="form-label" style={{ color: '#434F58' }}><b>Password</b></label>
                                                <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder='Password' required style={{ background: '#E3F0FF' }} />
                                            </div>
                                            <button type="submit" class="btn btn-primary p-2 mt-2 w-100" style={{ borderRadius: '0' }}><b>Sign In</b></button>
                                            <div class="form-text mt-3">Forgot your password? <Link href="#" style={{ textDecoration: 'none' }}><b>Click here to reset</b></Link> </div>
                                            <div className="row my-3">
                                                <div className="col-5">
                                                    <hr />
                                                </div>
                                                <div className="col-2 text-center pt-1">
                                                    or
                                                </div>
                                                <div className="col-5">
                                                    <hr />
                                                </div>
                                            </div>
                                            <button type="button" class="btn p-2 w-100" style={{ borderRadius: '0', border: '2px solid #0073EC' }} onClick={() => loginWithGoogle()}><b>Sign In</b></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.loginContentAfter400PX} bg-white p-4`}>
                <h3 className='d-sm-none d-block'><img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' /> <b>DREAMSTACK</b></h3>
                <h2 className='mt-sm-0 mt-4' style={{ lineHeight: '1', fontWeight: 'bolder' }}>Sign in to your account</h2>
                {errorEmailPasswordLogin ?
                    <h6 className="p-4 mt-4" style={{ background: '#FFF4B6', borderLeft: '8px solid #FFDA00', color: '#434F58' }}>Email or password is incorrect.</h6>
                    :
                    <></>
                }
                {errorGoogleLogin ?
                    <h6 className="p-4 mt-4" style={{ background: '#FFF4B6', borderLeft: '8px solid #FFDA00', color: '#434F58' }}>
                        No account matches your Google email address! Please use Dreamstack credentials to log in or <Link href="#SignUp">sign up</Link> for one of our products.
                    </h6>
                    :
                    <></>
                }
                <form className='mt-4' onSubmit={(e) => loginWithEmailPassword(e)}>
                    <div class="mb-4">
                        <label for="exampleInputEmail1" class="form-label" style={{ color: '#434F58' }}><b>Email</b></label>
                        <input type="email" class="form-control py-2" id="exampleInputEmail1" placeholder='Email' required style={{ background: '#E3F0FF' }} />
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label" style={{ color: '#434F58' }}><b>Password</b></label>
                        <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder='Password' required style={{ background: '#E3F0FF' }} />
                    </div>
                    <button type="submit" class="btn btn-primary p-2 mt-2 w-100" style={{ borderRadius: '0' }}><b>Sign In</b></button>
                    <div class="form-text mt-3">Forgot your password? <Link href="#" style={{ textDecoration: 'none' }}><b>Click here to reset</b></Link> </div>
                    <div className="row my-3">
                        <div className="col-5">
                            <hr />
                        </div>
                        <div className="col-2 text-center pt-1">
                            or
                        </div>
                        <div className="col-5">
                            <hr />
                        </div>
                    </div>
                    <button type="button" class="btn p-2 w-100" style={{ borderRadius: '0', border: '2px solid #0073EC' }} onClick={() => loginWithGoogle()}><b>Sign In</b></button>
                </form>
            </div>
        </div>
    )
}

