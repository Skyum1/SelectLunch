function setQuestion() {

    var qustionList = ["지금 매운 게 땡긴다."
                    , "오늘따라 고급진 음식이 땡긴다."
                    , "밥이 먹고 싶다."
                    , "지금 너무 배고파서 금방 나오는 음식이면 좋겠다(인스턴트 음식)"
                    , "어제 술을 마셨다."
                    , "같이 먹을 사람이 있다."
                    , "한식이 먹고 싶다."
                ];
    return qustionList;
}

function foodList() {
    var foodList = {};

    foodList["피자"] = ["0,2","1,0","-3,1","1,0","0,0","2,0","-3,0"];
    foodList["햄버거"] = ["0,1","-2,0","-3,1","2,0","1,0","0,2","-3,0"];
    foodList["치킨"] = ["0,1","0,0","-3,1","0,0","0,0","2,0","-3,0"];
    foodList["라멘"] = ["0,0","-1,1","-2,1","1,0","1,0","0,0","-3,0"];
    foodList["찜닭"] = ["0,0","1,0","2,0","0,1","0,0","2,0","-3,0"];
    foodList["삼겹살"] = ["0,1","2,0","1,0","0,2","0,0","2,0","0,0"];
    foodList["국밥"] = ["0,1","0,1","2,-1","1,0","3,0","0,0","3,0"];
    foodList["냉면"] = ["0,1","0,1","-3,1","1,0","1,0","0,1","-3,0"];
    foodList["김치찌개"] = ["1,0","0,1","2,-1","0,0","2,0","1,0","3,0"];
    foodList["부대찌개"] = ["1,0","0,0","2,-1","0,0","2,0","2,0","3,0"];
    foodList["소고기"] = ["0,0","3,0","1,0","0,2","0,0","3,-2","0,0"];
    foodList["초밥"] = ["0,0","1,0","2,0","1,0","0,0","0,1","-3,0"];
    foodList["우동"] = ["0,0","0,1","-2,2","1,0","2,0","0,1","-3,0"];
    foodList["짜장면"] = ["0,0","0,1","-3,1","1,0","1,0","0,0","-3,0"];
    foodList["짬뽕"] = ["1,0","0,1","-3,1","1,0","2,0","0,0","-3,0"];
    foodList["마라탕"] = ["2,0","0,0","-3,1","1,0","2,0","0,0","-3,0"];

    return foodList;
}