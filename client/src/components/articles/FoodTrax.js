import React, { Component } from 'react';

class FoodTrax extends Component {
    render() {
        return (
                  <article className="article">

                <h3 className="article-title">FoodTrax – Food Chain traceability solution for food processors to track and trace products</h3>
                <a href="https://www.bcdc.online/foodtrax">www.bcdc.online/foodtrax</a>
                <div className="article-content">
                    <p>If the consumer wants to know if the product that he wants to buy are ethically made, this information sometimes is hard to be found. Blockchain technologic can be used to track the food from the manufacturer to the stores preventing waste, fraud and unethical practices. </p>
                    <p>FoodTrax is a blockchain app who tracks food from its origin to the store. With this app, the customer can buy local products, so it will be less carbon emissions due the food does not need to travel long distances. This can also ensure that the fish being sold came from a sustainable fisherman, or that coffee came from a fair producer. If some product gets contaminated at some point, the company can trace easily and quickly, while safe food would remain safe.</p>
                    <p>Wallmart conducted a traceback test, and it took six days, eighteen hours and twenty-six minutes to trace back to its original farm. By using blockchain, Wallmart can provide all the information to the consumer in 2.2 seconds.</p>
                </div>
            </article>
        );
    }
}

export default FoodTrax;
