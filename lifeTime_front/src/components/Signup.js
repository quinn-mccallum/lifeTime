import React from "react";

import { Form, Button, Input, Card, Col, Cascader, Divider} from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

const age = [{
    value: "15",
    label: "15 to 19 years"
}, {
    value: '20',
    label: '20 to 24 years'
}, {
    value: '25',
    label: '25 to 34 years',
}, {
    value: '35',
    label: '35 to 44 years',
}, {
    value: '45',
    label: '45 to 54 years',
}, {
    value: '55',
    label: '55 to 64 years',
}, {
    value: '65',
    label: '65 to 74 years',
}, {
    value: '75',
    label: '75 years and over',
}];

const sex = [{
    value: "male",
    label: "Male"
}, {
    value: "female",
    label: "Female"
}]

const hours = [{
    value: 0,
    label: "0"
}, {
    value: 1,
    label: "1"
}, {
    value: 2,
    label: "2"
}, {
    value: 3,
    label: "3"
}, {
    value: 4,
    label: "4"
}, {
    value: 5,
    label: "5"
}, {
    value: 6,
    label: "6"
}, {
    value: 7,
    label: "7"
}, {
    value: 8,
    label: "8"
}, {
    value: 9,
    label: "9"
}, {
    value: 10,
    label: "10"
}, {
    value: 11,
    label: "11"
}, {
    value: 12,
    label: "12"
}]


class Signup extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const form = this.props.form;
        let name = form.getFieldValue('name');
        let email = form.getFieldValue('email');
        let age = form.getFieldValue('age');
        let sex = form.getFieldValue('sex'); 
        let chores = form.getFieldValue('chores');
        let care = form.getFieldValue('care');
        let sleep = form.getFieldValue('sleep');
        let work = form.getFieldValue('work');
        let phone = form.getFieldValue('phone');
        let tv = form.getFieldValue('tv');
        this.props.addProfile(name, email, age[0], sex[0], chores[0], care[0], sleep[0], work[0], phone[0], tv[0]);
        this.props.history.replace('/data')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card style={{ padding: "50px", margin: "50px" }}>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup size="large">
                            <Col span={12}>
                                <FormItem
                                    label="Name"
                                >
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, type: 'string', message: "Name is required" }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </Col>

                            <Col span={12}>
                                <FormItem
                                    label="Email"
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, type: 'string', message: "Email is required" }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </Col>
                        </InputGroup >

                        <InputGroup size="large">
                            <Col span={12}>
                                <FormItem
                                    label="Age"
                                >
                                    {getFieldDecorator('age', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader options={age} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="Sex"
                                >
                                    {getFieldDecorator('sex', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader options={sex} />
                                    )}
                                </FormItem>
                            </Col>
                        </InputGroup>

                        <Divider />

                        <InputGroup size="large">
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you spend doing chores?"
                                >
                                    {getFieldDecorator('chores', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} placeholder="ex: cooking" />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you spend on personal care?"
                                >
                                    {getFieldDecorator('care', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} placeholder="ex: shower" />
                                    )}
                                </FormItem>
                            </Col>
                        </InputGroup>

                        <InputGroup size="large">
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you sleep per night?"
                                >
                                    {getFieldDecorator('sleep', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you spend at work/school?"
                                >
                                    {getFieldDecorator('work', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} />
                                    )}
                                </FormItem>
                            </Col>
                        </InputGroup>

                        <InputGroup size="large">
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you spend on your phone?"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="How many hours do you spend watching TV?"
                                >
                                    {getFieldDecorator('tv', {
                                        rules: [{ required: true, type: 'array', message: "This is required" }],
                                    })(
                                        <Cascader size="large" options={hours} />
                                    )}
                                </FormItem>
                            </Col>
                        </InputGroup>

                        <FormItem>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

const WrappedSignup = Form.create()(Signup);

export default WrappedSignup;