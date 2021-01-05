import React from 'react';
import './FlashCard.scss';

interface IFlashCardProps {
    data?: {
        front: string;
        back: string;
    }
}

interface IFlashCardState {
    isTurned: boolean;
}

class FlashCard extends React.Component<IFlashCardProps, IFlashCardState> {

    constructor(props: IFlashCardProps) {
        super(props);

        this.state = {
            isTurned: false,
        };

        console.log('this.props', this.props);

    }

    toggleCard() {
        this.setState({
            isTurned: !this.state.isTurned,
        });
    }

    render() {
        return (
            <div className={this.state.isTurned ? 'card is-turned' : 'card'}
                onClick={this.toggleCard.bind(this)}>
                <div className="card__face card__face--front">
                    <div className="card__content">
                        {this.props.data?.front}
                    </div>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        {this.props.data?.back}
                    </div>
                </div>
            </div>

        );
    }

}

export default FlashCard;
