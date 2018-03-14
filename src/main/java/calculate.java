
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * [Java]2018年刑侦科推理试卷
 */
public class calculate {

    /**
     * 拆分验证
     * @param list 选项集合
     * @return
     */
    public static boolean check(List<String> list){
        if(!check3(list)){
            return false;
        }
        if(!check4(list)){
            return false;
        }
        if(!check5(list)){
            return false;
        }
        if(!check6(list)){
            return false;
        }
        if(!check7(list)){
            return false;
        }
        if(!check8(list)){
            return false;
        }
        if(!check9(list)){
            return false;
        }
        if(!check10(list)){
            return false;
        }
        return true;
    }

    public static boolean check3(List<String> list){
        String str = list.get(2);
        if(str.equals("A")){//24,26,46
            //13,15,35
            return (list.get(1).equals(list.get(3))&&list.get(1).equals(list.get(5))&&list.get(3).equals(list.get(5)));
        }
        if(str.equals("B")){//23,24,34
            //12,13,23
            return (list.get(1).equals(list.get(2))&&list.get(1).equals(list.get(3))&&list.get(2).equals(list.get(3)));
        }
        if(str.equals("C")){//34,36,46
            //23,25,35
            return (list.get(2).equals(list.get(3))&&list.get(2).equals(list.get(5))&&list.get(3).equals(list.get(5)));
        }
        if(str.equals("D")){//23,26,36
            //12,15,25
            return (list.get(1).equals(list.get(2))&&list.get(1).equals(list.get(5))&&list.get(2).equals(list.get(5)));
        }
        return false;
    }

    private static boolean check4(List<String> list) {
        String str = list.get(3);
        if(str.equals("A")){
            return list.get(0).equals(list.get(4));
        }
        if(str.equals("B")){
            return list.get(1).equals(list.get(6));
        }
        if(str.equals("C")){
            return list.get(0).equals(list.get(8));
        }
        if(str.equals("D")){
            return list.get(5).equals(list.get(9));
        }
        return false;
    }

    private static boolean check5(List<String> list) {
        String str = list.get(4);
        if(str.equals("A")){
            return list.get(4).equals(list.get(7));
        }
        if(str.equals("B")){
            return list.get(4).equals(list.get(3));
        }
        if(str.equals("C")){
            return list.get(4).equals(list.get(8));
        }
        if(str.equals("D")){
            return list.get(4).equals(list.get(6));
        }
        return false;
    }

    private static boolean check6(List<String> list) {
        String str = list.get(5);
        if(str.equals("A")){//82,84,24
            return (list.get(7).equals(list.get(1))&&list.get(7).equals(list.get(3))&&list.get(2).equals(list.get(3)));
        }
        if(str.equals("B")){//81,86,16
            return (list.get(7).equals(list.get(0))&&list.get(7).equals(list.get(5))&&list.get(0).equals(list.get(5)));
        }
        if(str.equals("C")){//83,810,310
            return (list.get(7).equals(list.get(2))&&list.get(7).equals(list.get(9))&&list.get(2).equals(list.get(9)));
        }
        if(str.equals("D")){//85,89,59
            return (list.get(7).equals(list.get(4))&&list.get(7).equals(list.get(8))&&list.get(4).equals(list.get(8)));
        }
        return false;
    }

    private static boolean check7(List<String> list) {
        String str = list.get(6);
        int countA = Collections.frequency(list, "A");
        int countB = Collections.frequency(list, "B");
        int countC = Collections.frequency(list, "C");
        int countD = Collections.frequency(list, "D");
        List<Integer> l = new ArrayList<Integer>();
        l.add(countA);
        l.add(countB);
        l.add(countC);
        l.add(countD);
        int a = Collections.min(l);
        if(str.equals("A")){
            return a==countC;
        }
        if(str.equals("B")){
            return a==countB;
        }
        if(str.equals("C")){
            return a==countA;
        }
        if(str.equals("D")){
            return a==countD;
        }
        return false;
    }

    private static boolean check8(List<String> list) {
        String[] numArray = new String[]{"A","B","C","D"};
        List<String> l = Arrays.asList(numArray);
        String str = list.get(7);
        String str1 = list.get(0);
        if(str.equals("A")){
            String s = list.get(6);
            return (Math.abs(l.indexOf(str1)-l.indexOf(s))<0)||(Math.abs(l.indexOf(str1)-l.indexOf(s))>1);
        }
        if(str.equals("B")){
            String s = list.get(4);
            return (Math.abs(l.indexOf(str1)-l.indexOf(s))<0)||(Math.abs(l.indexOf(str1)-l.indexOf(s))>1);
        }
        if(str.equals("C")){
            String s = list.get(1);
            return (Math.abs(l.indexOf(str1)-l.indexOf(s))<0)||(Math.abs(l.indexOf(str1)-l.indexOf(s))>1);
        }
        if(str.equals("D")){
            String s = list.get(9);
            return (Math.abs(l.indexOf(str1)-l.indexOf(s))<0)||(Math.abs(l.indexOf(str1)-l.indexOf(s))>1);
        }
        return false;
    }

    private static boolean check9(List<String> list) {
        String str = list.get(8);
        boolean s = list.get(0).equals(list.get(5));
        if(str.equals("A")){
            return !s==list.get(5).equals(list.get(4));
        }
        if(str.equals("B")){
            return !s==list.get(9).equals(list.get(4));
        }
        if(str.equals("C")){
            return !s==list.get(1).equals(list.get(4));
        }
        if(str.equals("D")){
            return !s==list.get(8).equals(list.get(4));
        }
        return false;
    }

    private static boolean check10(List<String> list) {
        String str = list.get(9);
        int countA = Collections.frequency(list, "A");
        int countB = Collections.frequency(list, "B");
        int countC = Collections.frequency(list, "C");
        int countD = Collections.frequency(list, "D");
        List<Integer> l = new ArrayList<Integer>();
        l.add(countA);
        l.add(countB);
        l.add(countC);
        l.add(countD);
        int a = Collections.min(l);
        int b = Collections.max(l);
        if(str.equals("A")){
            return b-a==3;
        }
        if(str.equals("B")){
            return b-a==2;
        }
        if(str.equals("C")){
            return b-a==4;
        }
        if(str.equals("D")){
            return b-a==1;
        }
        return false;
    }


    public static void main(String[] args) {
        //可选选项
        String[] numArray = new String[]{"A","B","C","D"};
        //穷举每一次产生的一条选项结果
        String[] initArray = new String[]{"A","A","A","A","A","A","A","A","A","A"};
        List<String> selectList = Arrays.asList(initArray);
        for(String a : numArray){
            selectList.set(0,a);
            for(String b : numArray){
                selectList.set(1,b);
                for(String c : numArray){
                    selectList.set(2,c);
                    for(String d : numArray){
                        selectList.set(3,d);
                        for(String e : numArray){
                            selectList.set(4,e);
                            for(String f : numArray){
                                selectList.set(5,f);
                                for(String g : numArray){
                                    selectList.set(6,g);
                                    for(String h : numArray){
                                        selectList.set(7,h);
                                        for(String i : numArray){
                                            selectList.set(8,i);
                                            for(String j : numArray){
                                                selectList.set(9,j);
                                                boolean result = check(selectList);
                                                if(result==true){
                                                    System.out.println("结果为:"+selectList.toString());
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.println("over");
        /*String[] array = new String[]{"B","C","A","C","A","C","D","A","B","A"};
        selectList = Arrays.asList(array);
        boolean result = check(selectList);
        if(result==true){
            System.out.println("结果为:"+selectList.toString());
        }*/
    }
}
