import React, { Component } from 'react'
import api from '../api/axios'
import './insert.css'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SeatUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            password: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.validity.valid
            ? event.target.value
            : this.state.password

        this.setState({ password })
    }

    handleChangeInputSeatNumber = async event => {
        const seatNumber = event.target.value
        this.setState({ seatNumber })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleUpdateSeat = async () => {
        const { id, name,  password, seatNumber, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, password, seatNumber, time: arrayTime }

        const node = await api.getSeatById(id)

        if(node.data.data.password === this.state.password) {
            await api.updateSeatById(id, payload).then(res => {
                window.alert(`자리가 성공적으로 수정되었습니다.`)
                this.setState({
                    name: '',
                    password: '',
                    seatNumber: '',
                    time: '',
                })
            })
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const seat = await api.getSeatById(id)

        this.setState({
            name: seat.data.data.name,
            seatNumber: seat.data.data.seatNumber,
            time: seat.data.data.time.join('/'),
        })
    }

    render() {
        const { name, password, seatNumber, time } = this.state
        return (
            <Wrapper>
                <div id="css">
                    <Title id="css-font">자리 수정</Title>

                    <Label id="css-font"><h4 id="small-font">
                        전화번호
                    </h4></Label>
                    <InputText
                        id = "css-input"
                        type="text"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={name}
                        onChange={this.handleChangeInputName}
                    />

                    <Label id="css-font"><h4 id="small-font">
                        비밀번호
                    </h4></Label>
                    <InputText
                        id = "css-input"
                        type="password"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={password}
                        onChange={this.handleChangeInputPassword}
                    />

                    <Label id="css-font"><h4 id="small-font">
                        좌석번호
                    </h4></Label>
                    <InputText
                        id = "css-input"
                        type="number"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={seatNumber}
                        onChange={this.handleChangeInputSeatNumber}
                    />

                    <Label id="css-font"><h4 id="small-font">
                        Time
                    </h4></Label>
                    <InputText
                        id = "css-input"
                        type="text"
                        value={time}
                        onChange={this.handleChangeInputTime}
                    />

                    <Button onClick={this.handleUpdateSeat}>자리 수정</Button>
                    <CancelButton href={'/seats/list'}>취소</CancelButton>
                </div>
            </Wrapper>
        )
    }
}

export default SeatUpdate