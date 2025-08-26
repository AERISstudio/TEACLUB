// src/pages/Activity.js
import React from "react";

function Activity() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1500px", position: "relative" }}>
        <div
          style={{
            width: "100%",
            position: "relative",
            backgroundColor: "#fff",
            height: "3220px",
            overflow: "hidden",
            textAlign: "left",
            fontSize: "16px",
            color: "#000",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          {/* 상단 메인 타이틀 영역 */}
          <div
            style={{
              position: "absolute",
              top: "178px",
              left: "-54px",
              width: "1429px",
              height: "407px",
              textAlign: "center",
              fontSize: "200px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "45px",
                left: 0,
                width: "1253.1px",
                height: "178px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  left: 0,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "615px",
                  height: "172px",
                }}
              >
                All
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "457px",
                  fontSize: "223px",
                  fontWeight: 500,
                  fontFamily: '"Playfair Display"',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "743.1px",
                  height: "177px",
                }}
              >
                activity
              </div>
            </div>

            {/* 전구 아이콘 */}
            <img
              alt="전구"
              src={require("../assets/activity/전구-1.png")}
              style={{
                position: "absolute",
                top: 0,
                left: "1232px",
                width: "197px",
                height: "273.3px",
                objectFit: "contain",
              }}
            />

            {/* 서브 카피 */}
            <div
              style={{
                position: "absolute",
                top: "302px",
                left: "185px",
                fontSize: "20px",
                lineHeight: "40px",
                fontWeight: 600,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                width: "506px",
                height: "105px",
              }}
            >
              <span style={{ width: "100%" }}>
                <p style={{ margin: 0 }}>
                  茶를 통한 새로운 탐구의 시작, 정오의 다과회 입니다.
                </p>
                <p style={{ margin: 0 }}>
                  우리는 데이터 분석, 프로덕트 개발, 비지니스 모델 구성까지,
                </p>
                <p style={{ margin: 0 }}>
                  획일화된 탐구가 아닌 새로움을 추구합니다.
                </p>
              </span>
            </div>
          </div>

          {/* TEA 섹션 타이틀 + 위/아래 라인 */}
          <div
            style={{
              position: "absolute",
              top: "742px",
              left: 0,
              width: "1512px",
              height: "132px",
              textAlign: "center",
              fontSize: "110px",
              fontFamily: '"Playfair Display"',
            }}
          >
            <img
              alt="찻잔"
              src={require("../assets/activity/찻잔.png")}
              style={{
                position: "absolute",
                top: "37px",
                left: "320px",
                width: "115px",
                height: "71px",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "6px",
                left: "131.97px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "200.5px",
                height: "106.8px",
              }}
            >
              tea
            </div>
            {/* 위/아래 가로 라인 (원본 유지) */}
            <div
              style={{
                position: "absolute",
                top: "-0.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "131.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
          </div>

          {/* TEA 섹션 이미지 그리드 */}
          <div
            style={{
              position: "absolute",
              top: "961px",
              left: "114px",
              width: "644px",
              height: "476px",
            }}
          >
            <img
              alt="tea1"
              src={require("../assets/activity/tea_activity_1.png")}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "10px",
                width: "357px",
                height: "476px",
                objectFit: "cover",
              }}
            />
            <img
              alt="tea2"
              src={require("../assets/activity/tea_activity_2.png")}
              style={{
                position: "absolute",
                top: 0,
                left: "393px",
                borderRadius: "10px",
                width: "193px",
                height: "257px",
                objectFit: "cover",
              }}
            />
            <img
              alt="tea3"
              src={require("../assets/activity/tea_activity_3.png")}
              style={{
                position: "absolute",
                top: "288px",
                left: "393px",
                borderRadius: "10px",
                width: "251px",
                height: "188px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* TEA 섹션 아이콘 */}
          <img
            alt="tea"
            src={require("../assets/activity/tea.png")}
            style={{
              position: "absolute",
              top: "989px",
              left: "1219px",
              width: "168.9px",
              height: "134.8px",
              objectFit: "contain",
            }}
          />

          {/* TEA 섹션 텍스트 */}
          <div
            style={{
              position: "absolute",
              top: "1021px",
              left: "891px",
              width: "506px",
              height: "356px",
              fontSize: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                lineHeight: "40px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                width: "506px",
                height: "73px",
              }}
            >
              오늘, 차 한잔 어때요?
            </div>
            <div
              style={{
                position: "absolute",
                top: "207px",
                left: 0,
                fontSize: "20px",
                lineHeight: "40px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                width: "506px",
                height: "149px",
              }}
            >
              <span style={{ width: "100%" }}>
                <p style={{ margin: 0 }}>
                  동아리, 외부대회, 수행평가 등 다양한 업무로 힘든 나날에
                </p>
                <p style={{ margin: 0 }}>
                  ‘차'를 통한 잠깐의 휴식과 기분전환을 통한 능률 개선이
                </p>
                <p style={{ margin: 0 }}>정오의 다과회의 개설 목적입니다.</p>
                <p style={{ margin: 0 }}>
                  정기적인 티타임으로 조금은 쉬어가는게 어떨까요?
                </p>
              </span>
            </div>
          </div>

          {/* ENGINEER 섹션 타이틀 + 위/아래 라인 */}
          <div
            style={{
              position: "absolute",
              top: "1525px",
              left: 0,
              width: "1512px",
              height: "132px",
              fontSize: "110px",
              fontFamily: '"Playfair Display"',
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "132px",
                width: "494.6px",
                height: "101.9px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  width: "462.6px",
                  height: "106.8px",
                }}
              >
                engineer
              </div>
            </div>
            {/* 위/아래 가로 라인 (원본 유지) */}
            <div
              style={{
                position: "absolute",
                top: "-0.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "131.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
            {/* 타이틀 옆 아이콘 */}
            <img
              alt="laptop_title"
              src={require("../assets/activity/laptop w title.png")}
              style={{
                position: "absolute",
                top: "21px",
                left: "600px",
                width: "136px",
                height: "97px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* ENGINEER 섹션 카드/썸네일 */}
          <img
            alt="engineer3"
            src={require("../assets/activity/engineer_activity_3.png")}
            style={{
              position: "absolute",
              top: "1768px",
              left: "520px",
              borderRadius: "10px",
              width: "338px",
              height: "203px",
              objectFit: "cover",
            }}
          />
          <img
            alt="engineer2"
            src={require("../assets/activity/engineer_activity_2.png")}
            style={{
              position: "absolute",
              top: "1996px",
              left: "520px",
              borderRadius: "10px",
              width: "271px",
              height: "192px",
              objectFit: "cover",
            }}
          />
          <img
            alt="engineer1"
            src={require("../assets/activity/engineer_activity_1.png")}
            style={{
              position: "absolute",
              top: "1741px",
              left: "132px",
              borderRadius: "10px",
              width: "367px",
              height: "476px",
              objectFit: "cover",
            }}
          />
          {/* ENGINEER 섹션 아이콘 */}
          <img
            alt="laptop"
            src={require("../assets/activity/laptop.png")}
            style={{
              position: "absolute",
              top: "1767px",
              left: "1267px",
              width: "140px",
              height: "132px",
              objectFit: "cover",
            }}
          />

          {/* BUSINESS 섹션 타이틀 + 위/아래 라인 */}
          <div
            style={{
              position: "absolute",
              top: "2299px",
              left: 0,
              width: "1512px",
              height: "132px",
              fontSize: "110px",
              fontFamily: '"Playfair Display"',
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "132px",
                width: "494.6px",
                height: "101.9px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  width: "462.6px",
                  height: "106.8px",
                }}
              >
                business
              </div>
            </div>
            {/* 위/아래 가로 라인 (원본 유지) */}
            <div
              style={{
                position: "absolute",
                top: "-0.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "131.5px",
                left: "-0.5px",
                borderTop: "1px solid #000",
                boxSizing: "border-box",
                width: "1513px",
                height: "1px",
              }}
            />
            {/* 타이틀 옆 아이콘 */}
            <img
              alt="money_title"
              src={require("../assets/activity/money.png")}
              style={{
                position: "absolute",
                top: "7px",
                left: "598px",
                width: "140px",
                height: "118px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* BUSINESS 섹션 카드/썸네일 */}
          <img
            alt="business3"
            src={require("../assets/activity/business_activity_3.png")}
            style={{
              position: "absolute",
              top: "2799px",
              left: "525px",
              borderRadius: "10px",
              width: "256px",
              height: "192px",
              objectFit: "cover",
            }}
          />
          <img
            alt="business2"
            src={require("../assets/activity/business_activity_2.png")}
            style={{
              position: "absolute",
              top: "2546px",
              left: "525px",
              borderRadius: "10px",
              width: "313px",
              height: "222px",
              objectFit: "cover",
            }}
          />
          <img
            alt="business1"
            src={require("../assets/activity/business_activity_1.png")}
            style={{
              position: "absolute",
              top: "2546px",
              left: "152px",
              borderRadius: "10px",
              width: "339px",
              height: "445px",
              objectFit: "cover",
            }}
          />

          {/* BUSINESS 섹션 본문 (우측) + 전구 아이콘 */}
          <div
            style={{
              position: "absolute",
              top: "2558px",
              left: "909px",
              width: "506px",
              height: "373px",
              fontSize: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "17px",
                left: 0,
                lineHeight: "40px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                width: "506px",
                height: "73px",
              }}
            >
              정확한 분석, 창의적인 구상
            </div>
            <img
              alt="전구(본문)"
              src={require("../assets/activity/전구.png")}
              style={{
                position: "absolute",
                top: 0,
                left: "441px",
                width: "64.6px",
                height: "89.6px",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "224px",
                left: 0,
                fontSize: "20px",
                lineHeight: "40px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                width: "506px",
                height: "149px",
              }}
            >
              <span style={{ width: "100%" }}>
                <p style={{ margin: 0 }}>&nbsp;</p>
                <p style={{ margin: 0 }}>비지니스에서 가장 중요한 것은 바로,</p>
                <p style={{ margin: 0 }}>프로덕트를 소비하는 소비자 입니다.</p>
                <p style={{ margin: 0 }}>
                  정오의 다과회는 정확한 데이터 분석과 창의적인 아이디어로,
                </p>
                <p style={{ margin: 0 }}>새로운 혁신을 제시합니다.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
