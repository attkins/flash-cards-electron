import React from 'react';
import FlashCard from './FlashCard';

import { data } from './data';

import './CardBox.scss';

interface IFlashCard {
    front: string;
    back: string;
}

interface ICardBoxProps { }

interface ICardBoxState {
    current?: IFlashCard;
    todo: IFlashCard[];
    success: IFlashCard[];
    fail: IFlashCard[];
}

class CardBox extends React.Component<ICardBoxProps, ICardBoxState> {

    constructor(props: ICardBoxProps) {
        super(props);

        const cards = data.map(d => ({
            front: d.es,
            back: d.de,
        }));

        this.state = {
            current: cards.shift(),
            todo: cards,
            success: [],
            fail: [],
        }
    }

    onCardFail() {

        this.setNextCard()
    }

    onCardSuccess() {

        this.setNextCard()
    }

    setNextCard() {
        const cards = this.state.todo

        this.setState({
            current: cards.shift(),
            todo: cards
        })
    }

    render() {
        return (
            <div className="card-box">
                <div className="cards">
                    <FlashCard data={this.state.current} />
                </div>
                <div className="cards-actions">
                    <button
                        onClick={this.onCardSuccess.bind(this)}
                        className="cards-action cards-action--yes">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                                <path d="M13.38,19.59l-3.29-3.3L8.67,17.71,12,21a2,2,0,0,0,1.42.58A2,2,0,0,0,14.79,21l8.54-8.54-1.42-1.41Z" />
                            </g>
                        </svg>
                        { this.state.success.length > 0 ? 
                        <div className="badge">
                            {this.state.success.length}
                            <span className="is-hidden" aria-hidden="true">Gewusst</span>
                        </div>
                        : null }
                    </button>
                    <button
                        onClick={this.onCardFail.bind(this)}
                        className="cards-action cards-action--no">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                                <polygon points="19.54 11.05 16 14.59 12.46 11.05 11.05 12.46 14.59 16 11.05 19.54 12.46 20.95 16 17.41 19.54 20.95 20.95 19.54 17.41 16 20.95 12.46 19.54 11.05" /></g>
                        </svg>
                        { this.state.fail.length > 0 ? 
                        <div className="badge">
                            {this.state.fail.length}
                            <span className="is-hidden" aria-hidden="true">Nicht gewusst</span>
                        </div>
                        : null }
                    </button>
                    <div className="cards-action cards-counter">
                        {this.state.todo?.length}
                    </div>
                </div>
            </div>
        );
    }

}

export default CardBox;
