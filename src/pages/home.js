import React, { Component } from 'react'

class home extends Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <p><h4>카페 / 스터디카페 사용법에 대해 설명합니다.</h4></p>
                <p><h4>현재 페이지는 사용법 페이지입니다.</h4></p>
                <p><h4>자리 현황에서는 현재 예약된 자리, 그리고 예약 번호를 알 수 있습니다.
                    자리 수정과 자리를 삭제하는 것도 가능합니다.
                </h4></p>
                <p><h4>자리 예약하기는 자리를 예약하는 페이지입니다.</h4></p>
                <p><h4>예약번호, 비밀번호, 자리, 이용권을 선택하고
                    자리를 예약할 수 있습니다.
                </h4></p>
            </div>
        )
    }
}

export default home