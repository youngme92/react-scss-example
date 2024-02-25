import thumnail1 from "../assets/img/@Thumbnail1.svg";
import thumnail2 from "../assets/img/@Thumbnail2.svg";

interface Ishoplist {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountRate: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  delivery: boolean;
  like: boolean;
  cart: boolean;
  thumnail: string[];
}

const shoplist: Ishoplist[] = [
  // {
  //   id: 1,
  //   name: "신라면 컵라면 + 신라면 봉지라면 (2입)",
  //   price: 700,
  //   originalPrice: 1400,
  //   discountRate: 50,
  //   rating: 4.6,
  //   ratingCount: 0,
  //   tags: ["POP할인"],
  //   delivery: true,
  //   like: false,
  //   cart: false,
  //   thumnail: [thumnail1, thumnail2],
  // },
  // {
  //   id: 2,
  //   name: "신라면 컵라면 + 신라면 봉지라면 (2입)",
  //   price: 700,
  //   originalPrice: 1400,
  //   discountRate: 50,
  //   rating: 4.6,
  //   ratingCount: 0,
  //   tags: ["POP할인"],
  //   delivery: true,
  //   like: false,
  //   cart: false,
  //   thumnail: [thumnail1, thumnail2],
  // },
  // {
  //   id: 3,
  //   name: "신라면 컵라면 + 신라면 봉지라면 (2입)",
  //   price: 700,
  //   originalPrice: 1400,
  //   discountRate: 50,
  //   rating: 4.6,
  //   ratingCount: 0,
  //   tags: ["POP할인"],
  //   delivery: true,
  //   like: false,
  //   cart: false,
  //   thumnail: [thumnail1, thumnail2],
  // },
  // {
  //   id: 4,
  //   name: "신라면 컵라면 + 신라면 봉지라면 (2입)",
  //   price: 700,
  //   originalPrice: 1400,
  //   discountRate: 50,
  //   rating: 4.6,
  //   ratingCount: 0,
  //   tags: ["POP할인"],
  //   delivery: true,
  //   like: false,
  //   cart: false,
  //   thumnail: [thumnail1, thumnail2],
  // },
];

function EmptyPage() {
  return (
    <>
      <nav>
        <ul className="tab-type3">
          <li className="tab-type3--active">
            <a href="">모두</a>
          </li>
          <li>
            <a href="">계란·두부</a>
          </li>
          <li>
            <a href="">간편 채소</a>
          </li>
          <li>
            <a href="">가공 채소</a>
          </li>
        </ul>
      </nav>
      <div className="empty-content height-type1">
        <div className="empty-content__img1"></div>
        <div className="empty-content__text">
          아직 준비된 상품이 없어요.
          <b>빠른 시일 내에 다시 준비할게요.</b>
        </div>
      </div>
    </>
  );
}

export default function ShopListPage() {
  return (
    <>
      <nav>
        <ul className="tab-type2">
          <li className="tab-type2--active">
            <a>모두</a>
          </li>
          <li>
            <a>샐러드</a>
          </li>
          <li>
            <a>샐러드 드레싱</a>
          </li>
          <li>
            <a>과일</a>
          </li>
          <li>
            <a>채소</a>
          </li>
          <li>
            <a>레이블</a>
          </li>
          <li>
            <a>레이블</a>
          </li>
        </ul>
      </nav>
      <ul className="shop-list mx-16">
        {0 < shoplist.length &&
          shoplist.map(({ id }) => (
            <li key={id}>
              <a href="">
                <div className="shop-list__thumb">
                  <div className="badge black" aria-label="상품구매혜택">
                    N+1
                  </div>
                  <img
                    className="shop-list__thumb__large"
                    src={thumnail1}
                    alt=""
                  />
                  <img
                    className="shop-list__thumb__small"
                    src={thumnail2}
                    alt=""
                  />
                </div>
              </a>
              <div className="badge-list mt12">
                <div>
                  <div className="badge purple">배달</div>
                </div>
                <div className="shop-list__funcBtn">
                  <button
                    className="btn-like"
                    aria-label="좋아요 즐겨찾기"
                  ></button>
                  <button
                    className="btn-cart"
                    aria-label="장바구니 담기"
                  ></button>
                </div>
              </div>
              <a href="" className="shop-list__info mt8">
                <div className="shop-list__title">
                  신라면 컵라면 + 신라면 봉지라면 (2입)
                </div>
                <div className="shop-list__price">
                  <div className="shop-list__price--sale" aria-label="할인율">
                    50%
                  </div>
                  <div className="shop-list__price--original" aria-label="원가">
                    1,400원
                  </div>
                  <div className="shop-list__price--sell" ariga-label="판매가">
                    700원
                  </div>
                </div>
                <div className="shop-list__hashtag" aria-label="상품태그">
                  <div className="badge gray">POP할인</div>
                </div>
                <div className="shop-list__rating" aria-label="별점">
                  4.6 (00)
                </div>
              </a>
            </li>
          ))}
      </ul>
      {shoplist.length < 1 && <EmptyPage />}
    </>
  );
}
