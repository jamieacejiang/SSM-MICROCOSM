package util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.binary.Base64;


/**
 * 工具类
 * @author jiangman
 *
 */
public class SIMSUtil {
	/**
	 * md5摘要算法
	 * @param msg
	 * @return
	 * @throws NoSuchAlgorithmException 
	 */
	public static String md5(String msg) throws NoSuchAlgorithmException{
		//利用MD5对msg处理
		MessageDigest md = MessageDigest.getInstance("MD5");
		byte[] input = msg.getBytes();
		byte[] output = md.digest(input);//将字节信息处理
		//将md5处理完的字节数组output转成字符串(注意乱码问题)
		//用return new String(output);会出现乱码问题，用base64就可以避免
		//return new String(output);
		String result = Base64.encodeBase64String(output);
		return result;
	}
	public static void main(String[] args) throws NoSuchAlgorithmException {
		System.out.println(md5("Aa123456"));
	}
}
