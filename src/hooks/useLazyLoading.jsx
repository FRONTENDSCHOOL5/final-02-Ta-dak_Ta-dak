import { useEffect } from 'react';

export default function useLazyLoading(observeImage, imgSrc) {
  useEffect(()=>{
    /**
     * IntersectionObserver(fn, Threshold)
      - 요소가 뷰포트 내에서 얼마나 보이는지를 감시하는 기능
      - 스크롤 같은 상황에서 요소가 나타나거나 사라지는 것 감지
      - 첫번째 인자로 타겟 요소가 배열로 들어감
      - 근데 하나를 관찰하기 때문에(ref={observeImage} 한 요소에만 줬기 때문에) 항상 한개의 객체만 배열 형태로 들어옴, 바로 쓰려고 [entry]로 받아옴
     */
    /**
     * Threshold (임계값)
      - 대상 요소가 뷰포트 내에서 얼마나 보이는지를 나타내는 값
      - 0 ~ 1 사이의 값
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        /**
         * entry : 이미지 요소
        isIntersecting : 요소가 뷰포트에 진입했을 때 true 반환, 이미지 src에 값 넣어줌
         */
        if (entry.isIntersecting) {
          console.log('요소가 뷰포트에 진입');
          /**
           * 우리가 저번에 같이 했던 코드 기억나나요?
          const imageSrc = [entry][0].target.dataset.src //보여진 리뷰의 인덱스
          observeImage.current.src = imageSrc
          
           * 위 코드에서 data-src={post.image} 값을 imgSrc에 저장
           * 왜 src={post.image} 값 넣고 entry.target.currentSrc로 받아오면 안되는가?
          - currentSrc는 이미지 엘리먼트가 로드된 후에만 사용 가능한 속성으로, 현재 로드된 이미지의 URL을 제공
          - currentSrc는 이미지가 로드되고 렌더링 된 후에 해당 값을 가짐

          - 그에 비해, data-src는 사용자 정의 데이터 속성으로, 우리가 설정한 속성 값을 읽어옴
          - 따라서 이미지가 로드되지 않아도 값을 가져올 수 있음

          const imgSrc = entry.target.dataset.src;  // 근데 Post.jsx에서는 결국 post.image값이 여기 들어감
                                                    // 그래서 그냥 중간과정 없이 post.image 전달받음
          observeImage.current.src = imgSrc;
           */

          observeImage.current.src = imgSrc;

          /**
           * observe.unobserve()
          - 대상이 한번 로드 됐으니까 더이상 '특정' 대상을 관찰하지 않아서 메모리 누수 방지
          - 이거 안하면 로드 됐던 위의 이미지를 다시 올라가서 볼 때도 관찰 계속 하고 있음
           */
          observer.unobserve(entry.target);
        } else {
          console.log('요소가 뷰포트에서 나감');
        }
      },
      { threshold: 0.1 }
    );

    // 이미지가 없는 게시글일 경우 관찰대상이 없어지므로 오류
    // 이미지가 있을 때만 observe
    observeImage.current && observer.observe(observeImage.current);

    return () => {
      console.log('언마운트');
      /**
       * observe.disconnect()
      요소가 언마운트 됐을 때 IntersectionObserver를 disconnect 시켜서 메모리 누수 방지
      IntersectionObserver 자체를 비활성화하고, '모든' 관찰 대상을 더 이상 관찰하지 않도록 설정
       */
      observer.disconnect();
    };
  }, [])
}

