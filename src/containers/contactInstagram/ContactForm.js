import React from 'react';
import { Form, Input, Message, Header, Button, Select } from 'semantic-ui-react'
import { authAxios } from '../../utils'
// import { createNeverUserServiceURL } from '../../constants'

import { Button2 } from '../Button.js'
import { ButtonM } from '../ButtonElements';

const serviceOptions = [
    { key: 'af', value: 'af', text: 'Website' },
    { key: 'ax', value: 'ax', text: 'IOS APP' },
    { key: 'al', value: 'al', text: 'Android APP' },
    { key: 'dz', value: 'dz', text: 'Logo' },
    { key: 'as', value: 'as', text: 'Features' },
    { key: 'as', value: 'as', text: 'Branding' },

]

const SelectExample = () => (
    <Select placeholder='Select a Service' options={serviceOptions} />
)


class NewService extends React.Component {

    state = {
        service: '',
        phoneNumber: '',
        message: '',
        error: null,
        loading: false
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            error: null
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })

        const { service, phoneNumber, message } = this.state

        console.log(service)
        console.log("--------")
        console.log(phoneNumber)
        console.log("--------")
        console.log(message)

        if (service !== '' && phoneNumber !== '' && message !== '') {

            authAxios.post('createNeverUserServiceURL', {
                service: service,
                phone_number: phoneNumber,
                message: message,
            })
                .then(res => {
                    this.setState({
                        loading: false,
                        service: '',
                        phoneNumber: '',
                        message: ''

                    })
                    window.location.href = "/account/services/";
                })
                .catch(err => {
                    this.setState({
                        loading: false,
                        error: err.response.data.message
                    })
                })

        } else {
            this.setState({
                loading: false,
                error: "please fill in all the fields "
            })

        }

    }

    render() {

        const { service, message, phoneNumber, error, loading } = this.state;

        return (
            <React.Fragment>
                

                <Form onSubmit={this.handleSubmit} error={error !== null}>
                    <Form.Field required>
                        {/* <label>Name </label> */}
                        <Input

                            placeholder="Fullname"
                            name="service"
                            onChange={this.handleChange}

                        />


                    </Form.Field>

                    <Form.Field required>
                        {/* <label>Phone Number</label> */}
                        <Input

                            placeholder="Phone Number"
                            name="phoneNumber"
                            onChange={this.handleChange}

                        />
                    </Form.Field>

                    <Form.Field required>
                        {/* <label>Message</label> */}
                        {/* <Input
                            
                            placeholder="Please tell us all the requirements and functionality for this service."

                            name="message"
                            onChange={this.handleChange}
                        /> */}
                        <textarea
                            placeholder="Message..."
                            name="message"
                            onChange={this.handleChange}
                            rows="12"
                            ></textarea>
                    </Form.Field>
                    {error && (
                        <Message error heading="There was an error" content={error} />
                    )}
                    <Button style={{backgroundColor: 'orange', color: 'white'}} type="submit" loading={loading} disabled={loading}>Submit</Button>

                </Form>


            </React.Fragment>
        );
    }
}

export default NewService;