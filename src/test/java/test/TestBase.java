package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestBase {
	private static ApplicationContext ac = null;
	//静态块，执行时机是什么
	static{
		ac = new ClassPathXmlApplicationContext(
				"spring-web.xml",
				"spring-mybatis.xml");
				//"spring-service.xml");
	}
	public static ApplicationContext getContext(){
		return ac;
	}
}
