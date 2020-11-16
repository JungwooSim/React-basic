import React, {useCallback, useEffect, useState} from "react";
import styles from './app.module.css';
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    }

    // useCallBack 은 메모리에 저장해놓기 때문에 메모리 누수가 생길수 있다.
    // 그러므로 꼭 사용해야될때만 사용하여야 한다.
    const search = useCallback(query => {
        setSelectedVideo(null);
        youtube
            .search(query)
            .then(videos => setVideos(videos));
    }, [youtube]);

    useEffect(() => {
        youtube
            .mostPopular()
            .then(videos => setVideos(videos));
    }, [youtube]);
    return (
        <div className={styles.App}>
            <SearchHeader onSearch={search}/>
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? 'list' : 'grid'}
                    />
                </div>
            </section>
        </div>
    );
}

export default App;
