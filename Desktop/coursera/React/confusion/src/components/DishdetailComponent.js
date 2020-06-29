import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText> 
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }


    renderComments(seldish){
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        if(seldish != null){
            const comm = this.props.seldish.comments.map((comment) => {
                return(
                    <div>
                        <ul>
                           <h6 align="left">{ comment.comment }</h6>
                           <p align="left">---{ comment.author }, <span>{new Date(comment.date).toLocaleDateString("en-US",options)}</span> </p>
                        </ul>
                    </div>
                );
            });
            return(
                <div>
                    <div><h4>Comments</h4></div>
                    <div>{comm}</div>

                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


    render(){
        return(
            <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.seldish)}
                </div>
                <div className='col-12 col-md-5 '>
                    {this.renderComments(this.props.seldish)}
                </div>
            </div>
            </div>
        );
    }
} 
    export default DishDetail;