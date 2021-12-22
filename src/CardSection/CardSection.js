import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <Card  cardTitle="Apple" btnText="hello1" 
            cardDescription="Hey How are you?"/>
            <Card cardTitle="Mango" btnText="hello2"
            cardDescription="Hey How are you?"
            />
            <Card cardTitle="Banana" btnText="hello3"
            cardDescription="Hey How are you?"
            />
          </div>
        </div>
      </section>
    )
}
export default CardSection