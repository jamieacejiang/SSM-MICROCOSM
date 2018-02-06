package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/echartStudy")
public class echartsControler {
    /**
     * 点击China Map按钮,跳转中国地图echarts页面
     * @return
     */
    @RequestMapping("/toChinaMap.do")
    public String toChinaMap(){
        return "chinaMap";
    }
    /**
     * 点击Map Study按钮,跳转地图学习echarts页面
     * @return
     */
    @RequestMapping("/toMapStudy.do")
    public String toMapStudy(){
        return "mapStudy";
    }
    /**
     * 点击Line Study按钮,跳转折线图学习页面
     * @return
     */
    @RequestMapping("/toLineStudy.do")
    public String toLineStudy(){
        return "lineStudy";
    }
    /**
     * 点击Bar Study按钮,跳转柱状图学习页面
     * @return
     */
    @RequestMapping("/toBarStudy.do")
    public String toBarStudy(){
        return "barStudy";
    }
    /**
     * 点击Scatter Study按钮,跳转散点图学习页面
     * @return
     */
    @RequestMapping("/toScatterStudy.do")
    public String toScatterStudy(){
        return "scatterStudy";
    }
    /**
     * 点击Scatter Study按钮,跳转散点图学习页面
     * @return
     */
    @RequestMapping("/toPieStudy.do")
    public String toPieStudy(){
        return "pieStudy";
    }
}
