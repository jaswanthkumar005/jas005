// Java orogram to demonstrate working of Queue
// interface in Java
import java.util.LinkedList;
import java.util.*;

public class UnixPermissions
{
   
public static void main(String[] args)
{
	String testString = "rwx-r-";
	int arr[]={1,2,7,0};
	HashSet<Character> ch = new HashSet<Character>();
	char[] stringToChar=testString.toCharArray();
	for (char out :stringToChar){
	    ch.add(out);
	    
	}
	System.out.println(ch[0]);
	HashMap<Character,Integer> mp = new HashMap<Character,Integer>();
	for(int i=0 ;i<arr.length;i++){
	    mp.put(ch[i],arr[i]);
	}
	System.out.println(mp);
	

}
}
