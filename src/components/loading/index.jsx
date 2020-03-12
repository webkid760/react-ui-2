import React,{useState} from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'


function Loading(props) {

  const {loading,text,fullscreen} = props;

  const getStyle = function(){

      if (loading) {
        return {
          position: 'relative'
        }
      }
      return {};

  }
  

  
  return (
       <div style={getStyle()}>
        { loading && (
          <div
            style={{
              display: 'block',
              position: 'absolute',
              zIndex: 657,
              backgroundColor: 'rgba(255, 255, 255, 0.901961)',
              margin: 0,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}>
            <div className={classNames('el-loading-spinner', {
              'is-full-screen': fullscreen
            })} style={{
              position: 'absolute',
              display: 'inline-block',
              left: 0
            }}>
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" />
              </svg>
              {
                text && <p className="el-loading-text">{text}</p>
              }
            </div>
          </div>
        )}
        
      </div>
  );
}

export default Loading;


Loading.propTypes = {
  text: PropTypes.string,
  fullscreen:PropTypes.bool,
  loading: PropTypes.bool
}

Loading.defaultProps = {
  	loading:true
};
