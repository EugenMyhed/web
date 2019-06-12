import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Menu  from '../Menu'
import Title from './Title' 
import homePageData from '../../js/homePageData'
import HomePagePosts from '../homePage/HomePagePosts'
import '../../scss/_homePage.scss'
import { getPosts } from '../../actions/actions'


class HomePage extends React.Component {

    componentDidMount(){
        const { getPosts } = this.props;
        axios.get('http://localhost:5000/postInfo')
        .then(res => {
            if(res.request.status === 200){
                getPosts(res.data)
            }
    })
    

    }

    render(){
        const {pathName, isLogin, postData, isAdmin} = this.props;
        return(
            <React.Fragment>
                <Menu     isAdmin={isAdmin} isLogin={isLogin} path={pathName} />
                <div className='wrapperHomePage'>
                    <Title />
                    <ul className='postContainer'>
                        {
                            postData.map(el => <HomePagePosts isAdmin={isAdmin} id={el._id} title={el.title} description={el.description} key={el._id} />)
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    isAdmin: state.ui.isAdmin,
    isLogin: state.ui.logined,
    postData: state.ui.postData
});

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)