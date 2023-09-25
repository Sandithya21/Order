import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state?.auth?.cartProducts) || [];
  const authState = useSelector(state => state.auth)
  const [total, setTotal] = useState(null);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

    const config2 = {
      headers : {
          Authorization : `Bearer ${
              getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
          }`,
          Accept : "application/json",
      },
  };

  useEffect(() => {
    dispatch(getUserCart(config2))
  },[])

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState.length; index++) {
      sum = sum + (Number(cartState[index].quantity) * Number(cartState[index].price));
      setTotal(sum);
    }
  }, [cartState, dispatch]);

  return (
    <>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h3>
                <Link className='text-white'>Chathura Motors</Link>
              </h3>
            </div>
            <div className='col-5'>
              <div class="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Search product here" 
                  aria-label="Search product here" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/compare.svg" alt="compare"/>
                    <p className='mb-0'>
                      Compare <br/> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/wishlist.svg" alt="wishlist"/>
                    <p className='mb-0'>
                      Favourite <br/> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link 
                  to={authState?.user=== null? "/login" : ""} 
                  className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/user.svg" alt="user"/>
                    {
                      authState?.user=== null?
                      <p className='mb-0'>
                      Log in <br/> My Account
                    </p> :
                    <p className='mb-0'>
                    Welcome {authState?.user?.firstname}
                  </p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-10'>   
                      <span className='badge bg-white text-dark'>{cartState?.length ? cartState?.length : 0}</span>
                      <p className='mb-0'>Rs.{total ? total : 0}</p>                  
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div class="dropdown">
                    <button 
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                      type="button" 
                      id="dropdownMenuButton1" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <img src='images/menu.svg' alt=''/>
                      <span className='me-5 d-ailine-block'>
                        Shop Category
                      </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/" className='text-white'>Home</NavLink>
                    <NavLink to="/store" className='text-white'>Our Store</NavLink>
                    <NavLink to="/my-orders" className='text-white'>My Orders</NavLink>
                    <NavLink to="/contact" className='text-white'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
