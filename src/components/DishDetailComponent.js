import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


    function RenderDish({dish}){
        if(dish!=null)
            return(
                <Card className="col-12 col-md-5 m-1">
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )    
        else
            return(
                <div></div>
            )
    }
    function RenderComments({comm}){
        if(comm!=null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comm.map((comment) => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} ,  {new Intl.DateTimeFormat('en-US', 
                                                          { year: 'numeric', month: 'short', 
                                                          day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        else 
            return (
                <div></div>
            );
    }

    const DishDetail=(props)=> {
        console.log("dishdetail component render");
        let dish;
        if (props.dish) {
            dish = (
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comm={props.dish.comments}/>
                </div>
            )
        } else {
            dish = <div></div>
        }
        return (
            <div className="container">
                {dish}
            </div>
        );
    }

export default DishDetail;