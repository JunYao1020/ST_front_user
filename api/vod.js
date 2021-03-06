/* eslint-disable indent */
import request from '@/utils/request'


export default {
    // eslint-disable-next-line space-before-function-paren
    gainPlayAuth(videoSourceId) {
        return request({
            url: `/rabbit/back/vod/${videoSourceId}`,
            method: 'get'
        })
    }

    // eslint-disable-next-line eol-last
}