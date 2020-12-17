import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const getTime = () => new Date().toLocaleTimeString()

const App = () => {
    return (
        <div className='ui container comments'>
            
            <ApprovalCard green='Approve' red='Reject'>
                <CommentDetail
                    src='https://unsplash.it/200/200'
                    author='Sam'
                    getTime={getTime()}
                    post={`Great Blog`}
                />
            </ApprovalCard>

            <ApprovalCard green='Yes' red='No'>
                <CommentDetail
                    src='https://unsplash.it/200/200'
                    author='Drew'
                    getTime={getTime()}
                    post={`2nd Comment!`}
                />
            </ApprovalCard>
            <ApprovalCard green='Confirm' red='Deny'>
                <CommentDetail
                    src='https://unsplash.it/200/200'
                    author='user704374'
                    getTime={getTime()}
                    post='Post #2...nvm' />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
