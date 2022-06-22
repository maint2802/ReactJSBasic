import React from 'react';
import { useState, useEffect } from 'react'

class CountDown extends React.Component {

    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({ count: this.state.count - 1 }), 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state && this.state.count === 0) {
            clearInterval(this.timer)
            // this.props.onTimeUp()
        }
    }

    render() {
        return (
            <>
                <h2>{this.state.count}</h2>
            </>
        )
    }
}

function NewCountDown() {

    const [countHook, setCountHook] = useState(10)

    useEffect(() => {

        if (countHook === 0) return
        let timer = setInterval(() => {
            setCountHook(countHook - 1)
        }, 1000)
        return () => (clearInterval(timer))
    }, [countHook])


    return (
        <>
            <h2>{countHook}</h2>
        </>
    )
}

export { NewCountDown, CountDown }