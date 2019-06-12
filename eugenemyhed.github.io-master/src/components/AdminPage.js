import React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'
import AdminForm from './AdminForm'
import { CreatePost } from '../js/axios'



const AdminPage = ({ pathName, isLogin, isAdmin }) => {
    const path = pathName.split('/')[1]
    return(
        <div>
            <Menu isAdmin={isAdmin} isLogin={isLogin} path={path} />
            <AdminForm onSubmit={postData => CreatePost(postData)} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.ui.logined,
    isAdmin: state.ui.isAdmin,

  });

export default connect(mapStateToProps, null)(AdminPage)