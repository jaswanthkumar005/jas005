import java.util.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
public class  DuplicateArray{
    public void duplicateVal(String[] str){
        
        ArrayList<String> obj = new ArrayList<String>(Arrays.asList(str));
         
        System.out.println(obj);
        HashSet<String> hash = new HashSet<String>();
          for(String sh : obj){
              if(hash.contains(sh)){
                 hash.remove(sh); 
              }else{
                 hash.add(sh);
              }
          }
          System.out.println(hash);
        }
    
  public static void main(String a[]){
    DuplicateArray obj = new DuplicateArray();
    System.out.println("String: BeginnersBook.com");
    System.out.println("-------------------------");
    obj.duplicateVal(new String[] {"Abbai","red","black","red","Abbai"});
  
    
  }
}
