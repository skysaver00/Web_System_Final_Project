import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api/axios'
import './list.css'

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateSeat extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/seats/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>자리 수정</Update>
    }
}

class DeleteSeat extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `${this.props.name}의 자리를 정말로 삭제하겠습니까?`,
            )
        ) {
            api.deleteSeatById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>자리 삭제</Delete>
    }
}


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSeats().then(seats => {
            this.setState({
                seats: seats.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { seats, isLoading } = this.state
        console.log('TCL: SeatList -> render -> seats', seats)

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Seat',
                accessor: 'seatNumber',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '삭제',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteSeat id={props.original._id} name={props.value.name} />
                        </span>
                    )
                },
            },
            {
                Header: '수정',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateSeat id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!seats.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <div id = "css">
                    {showTable && (
                        <ReactTable
                            data={seats}
                            columns={columns}
                            loading={isLoading}
                            defaultPageSize={10}
                            showPageSizeOptions={true}
                            minRows={0}
                        />
                    )}
                </div>
            </Wrapper>
        )
    }
}

export default List
