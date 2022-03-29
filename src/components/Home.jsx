import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
  render() {
    return (
        <>
            <Navbar></Navbar>
            <nav>
               <h1>Welcome to Quotastic</h1> 
               <h5>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</h5> 
               <button>Sign up</button>                                                                                                                     
            </nav>
            <nav>
                <img src="quote_top.png" alt="quote"/>
                <img src="quote_mid.png" alt="quote"/>
                <img src="quote_bottom.png" alt="quote"/>
            </nav>
            <nav>
                 <h2>Explore the world of fantastic quotes</h2>   
            </nav> 
            <nav>
                <h4>Most upvoted quotes</h4>
            </nav>  
            <nav>
                <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>                                      
            </nav>  
            <nav>
                MOST UPVOTED QUOTES LIST
            </nav>
            <nav>
                <button>Sign up to see more</button> 
            </nav>
            <nav>
                <img src="footer.png" alt="footer"/>
            </nav>
                
        </>
      
    )
  }
}
