 / * *  
   *   @ f i l e o v e r v i e w   G e o U t i l s|{c�O���^rQ�OU{�l��u(ge^.R�u(b7R$e�p�Nw�_b0  
   *  W_b0Y��_b~�0Y��_b�bv�Qs|� ,^vc�O���{�b�~��^�T�Y��_bv��by�v�Ql_0    
   *  N;QeS�|{f/ < a   h r e f = " s y m b o l s / B M a p L i b . G e o U t i l s . h t m l " > G e o U t i l s < / a >�  
   *  W�N� B a i d u   M a p   A P I   1 . 20  
   *  
   *   @ a u t h o r   B a i d u   M a p   A p i   G r o u p    
   *   @ v e r s i o n   1 . 2  
   * /  
  
 / * *    
   *   @ n a m e s p a c e   B M a pv�b@g	 l i b r a r y|{WGe>W( B M a p L i bT}Tzz��N  
   * /  
 v a r   B M a p L i b   =   w i n d o w . B M a p L i b   =   B M a p L i b   | |   { } ;  
 ( f u n c t i o n ( )   {  
  
 	 / * *  
 	   *  W0tSJ_�  
 	   * /  
 	 v a r   E A R T H R A D I U S   =   6 3 7 0 9 9 6 . 8 1 ;  
  
 	 / * *    
 	   *   @ e x p o r t s   G e o U t i l s   a s   B M a p L i b . G e o U t i l s    
 	   * /  
 	 v a r   G e o U t i l s   =  
 	 	 / * *  
 	 	   *   G e o U t i l s|{��Y`|{�R�� [�O�SSsS�Ou(  
 	 	   *   @ c l a s s   G e o U t i l s|{v� < b >QeS� < / b >0  
 	 	   *  ��|{c�O�v���f/�Y`e�l��R�� [�O�SSsS�Ou(        
 	 	   * /  
 	 	 B M a p L i b . G e o U t i l s   =   f u n c t i o n ( )   {  
  
 	 	 }  
  
 	 / * *  
 	   *  R$e�p�f/T&W(w�_bQ�  
 	   *   @ p a r a m   { P o i n t }   p o i n t  p�[��a  
 	   *   @ p a r a m   { B o u n d s }   b o u n d s  w�_b��uL[��a  
 	   *   @ r e t u r n s   { B o o l e a n }  p�W(w�_bQ���V� t r u e ,T&R��V� f a l s e  
 	   * /  
 	 G e o U t i l s . i s P o i n t I n R e c t   =   f u n c t i o n ( p o i n t ,   b o u n d s )   {  
 	 	 / /h�g�|{W�f/T&kcxn  
 	 	 i f   ( ! ( p o i n t   i n s t a n c e o f   B M a p . P o i n t )   | |  
 	 	 	 ! ( b o u n d s   i n s t a n c e o f   B M a p . B o u n d s ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
 	 	 v a r   s w   =   b o u n d s . g e t S o u t h W e s t ( ) ;   / /�SW�p�  
 	 	 v a r   n e   =   b o u n d s . g e t N o r t h E a s t ( ) ;   / /NS�p�  
 	 	 r e t u r n   ( p o i n t . l n g   > =   s w . l n g   & &   p o i n t . l n g   < =   n e . l n g   & &   p o i n t . l a t   > =   s w . l a t   & &   p o i n t . l a t   < =   n e . l a t ) ;  
 	 }  
  
 	 / * *  
 	   *  R$e�p�f/T&W(W_bQ�  
 	   *   @ p a r a m   { P o i n t }   p o i n t  p�[��a  
 	   *   @ p a r a m   { C i r c l e }   c i r c l e  W_b[��a  
 	   *   @ r e t u r n s   { B o o l e a n }  p�W(W_bQ���V� t r u e ,T&R��V� f a l s e  
 	   * /  
 	 G e o U t i l s . i s P o i n t I n C i r c l e   =   f u n c t i o n ( p o i n t ,   c i r c l e )   {  
 	 	 / /h�g�|{W�f/T&kcxn  
 	 	 i f   ( ! ( p o i n t   i n s t a n c e o f   B M a p . P o i n t )   | |  
 	 	 	 ! ( c i r c l e   i n s t a n c e o f   B M a p . C i r c l e ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
  
 	 	 / / p o i n tNW_Í�y�\N�W_bSJ_��Rp�W(WQ��T&RW(WY  
 	 	 v a r   c   =   c i r c l e . g e t C e n t e r ( ) ;  
 	 	 v a r   r   =   c i r c l e . g e t R a d i u s ( ) ;  
  
 	 	 v a r   d i s   =   G e o U t i l s . g e t D i s t a n c e ( p o i n t ,   c ) ;  
 	 	 i f   ( d i s   < =   r )   {  
 	 	 	 r e t u r n   t r u e ;  
 	 	 }   e l s e   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
 	 }  
  
 	 / * *  
 	   *  R$e�p�f/T&W(b�~�N
  
 	   *   @ p a r a m   { P o i n t }   p o i n t  p�[��a  
 	   *   @ p a r a m   { P o l y l i n e }   p o l y l i n e  b�~�[��a  
 	   *   @ r e t u r n s   { B o o l e a n }  p�W(b�~�N
��V� t r u e ,T&R��V� f a l s e  
 	   * /  
 	 G e o U t i l s . i s P o i n t O n P o l y l i n e   =   f u n c t i o n ( p o i n t ,   p o l y l i n e )   {  
 	 	 / /h�g�|{W�  
 	 	 i f   ( ! ( p o i n t   i n s t a n c e o f   B M a p . P o i n t )   | |  
 	 	 	 ! ( p o l y l i n e   i n s t a n c e o f   B M a p . P o l y l i n e ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
  
 	 	 / /��QHR$e�p�f/T&W(~�v�YSw�_bQ��Y�g�W(�R��N keR$e��T&R��V� f a l s e  
 	 	 v a r   l i n e B o u n d s   =   p o l y l i n e . g e t B o u n d s ( ) ;  
 	 	 i f   ( ! t h i s . i s P o i n t I n R e c t ( p o i n t ,   l i n e B o u n d s ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
  
 	 	 / /R$e�p�f/T&W(~�k�N
���p�N: Q�~�k�N: P 1 P 2  �  
 	 	 / /R$e�p� QW(��~�k�N
v�O�cnf/� (   Q   -   P 1   )   �   (   P 2   -   P 1   )   =   0�N   Q  W(N�   P 1� P 2N:[��Ҙvp�v�w�_bQ�  
 	 	 v a r   p t s   =   p o l y l i n e . g e t P a t h ( ) ;  
 	 	 f o r   ( v a r   i   =   0 ;   i   <   p t s . l e n g t h   -   1 ;   i + + )   {  
 	 	 	 v a r   c u r P t   =   p t s [ i ] ;  
 	 	 	 v a r   n e x t P t   =   p t s [ i   +   1 ] ;  
 	 	 	 / /��QHR$e� p o i n tf/T&W( c u r P tT� n e x t P tNK���Ss�kdR$e���p�f/T&W(��~�k�v�YSw�_bQ�  
 	 	 	 i f   ( p o i n t . l n g   > =   M a t h . m i n ( c u r P t . l n g ,   n e x t P t . l n g )   & &   p o i n t . l n g   < =   M a t h . m a x ( c u r P t . l n g ,   n e x t P t . l n g )   & &  
 	 	 	 	 p o i n t . l a t   > =   M a t h . m i n ( c u r P t . l a t ,   n e x t P t . l a t )   & &   p o i n t . l a t   < =   M a t h . m a x ( c u r P t . l a t ,   n e x t P t . l a t ) )   {  
 	 	 	 	 / /R$e�p�f/T&W(v�~�N
Ql_  
 	 	 	 	 v a r   p r e c i s i o n   =   ( c u r P t . l n g   -   p o i n t . l n g )   *   ( n e x t P t . l a t   -   p o i n t . l a t )   -  
 	 	 	 	 	 ( n e x t P t . l n g   -   p o i n t . l n g )   *   ( c u r P t . l a t   -   p o i n t . l a t ) ;  
 	 	 	 	 i f   ( p r e c i s i o n   <   2 e - 1 0   & &   p r e c i s i o n   >   - 2 e - 1 0 )   {   / /[��(R$e�f/T&c��� 0  
 	 	 	 	 	 r e t u r n   t r u e ;  
 	 	 	 	 }  
 	 	 	 }  
 	 	 }  
  
 	 	 r e t u r n   f a l s e ;  
 	 }  
  
 	 / * *  
 	   *  R$e�p�f/T&Y��_bQ�  
 	   *   @ p a r a m   { P o i n t }   p o i n t  p�[��a  
 	   *   @ p a r a m   { P o l y l i n e }   p o l y g o n  Y��_b[��a  
 	   *   @ r e t u r n s   { B o o l e a n }  p�W(Y��_bQ���V� t r u e ,T&R��V� f a l s e  
 	   * /  
 	 G e o U t i l s . i s P o i n t I n P o l y g o n   =   f u n c t i o n ( p o i n t ,   p o l y g o n )   {  
 	 	 / /h�g�|{W�  
 	 	 i f   ( ! ( p o i n t   i n s t a n c e o f   B M a p . P o i n t )   | |  
 	 	 	 ! ( p o l y g o n   i n s t a n c e o f   B M a p . P o l y g o n ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
  
 	 	 / /��QHR$e�p�f/T&W(Y��_bv�YSw�_bQ��Y�g�W(�R��N keR$e��T&R��V� f a l s e  
 	 	 v a r   p o l y g o n B o u n d s   =   p o l y g o n . g e t B o u n d s ( ) ;  
 	 	 i f   ( ! t h i s . i s P o i n t I n R e c t ( p o i n t ,   p o l y g o n B o u n d s ) )   {  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }  
  
 	 	 v a r   p t s   =   p o l y g o n . g e t P a t h ( ) ;   / /��S�Y��_bp�  
  
 	 	 / /N��N�xgen�� h t t p : / / p a u l b o u r k e . n e t / g e o m e t r y / i n s i d e p o l y /��ۈLN���RO�e9  
 	 	 / /W�g,``�f/R)u(\~�l����{�\~�NY��_bT��v�N�p��Y�g�f/Pvep�Rp�W(Y��_bY�T&R  
 	 	 / /W(Y��_bQ�0��O��QN N�ryk�`�Q��Y�p�W(Y��_b�vp�N
�p�W(Y��_b��N
{Iryk�`�Q�0  
  
 	 	 v a r   N   =   p t s . l e n g t h ;  
 	 	 v a r   b o u n d O r V e r t e x   =   t r u e ;   / /Y�g�p�OMN�Y��_bv��vp�b��N
�N_{�PZp�W(Y��_bQ��v�c���V� t r u e  
 	 	 v a r   i n t e r s e c t C o u n t   =   0 ;   / / c r o s s   p o i n t s   c o u n t   o f   x    
 	 	 v a r   p r e c i s i o n   =   2 e - 1 0 ;   / /mnp�|{W���{�e�PN 0kԏ�e�Pv�[�]�  
 	 	 v a r   p 1 ,   p 2 ;   / / n e i g h b o u r   b o u n d   v e r t i c e s  
 	 	 v a r   p   =   p o i n t ;   / /mK��p�  
  
 	 	 p 1   =   p t s [ 0 ] ;   / / l e f t   v e r t e x                  
 	 	 f o r   ( v a r   i   =   1 ;   i   < =   N ;   + + i )   {   / / c h e c k   a l l   r a y s                          
 	 	 	 i f   ( p . e q u a l s ( p 1 ) )   {  
 	 	 	 	 r e t u r n   b o u n d O r V e r t e x ;   / / p   i s   a n   v e r t e x  
 	 	 	 }  
  
 	 	 	 p 2   =   p t s [ i   %   N ] ;   / / r i g h t   v e r t e x                          
 	 	 	 i f   ( p . l a t   <   M a t h . m i n ( p 1 . l a t ,   p 2 . l a t )   | |   p . l a t   >   M a t h . m a x ( p 1 . l a t ,   p 2 . l a t ) )   {   / / r a y   i s   o u t s i d e   o f   o u r   i n t e r e s t s                                  
 	 	 	 	 p 1   =   p 2 ;  
 	 	 	 	 c o n t i n u e ;   / / n e x t   r a y   l e f t   p o i n t  
 	 	 	 }  
  
 	 	 	 i f   ( p . l a t   >   M a t h . m i n ( p 1 . l a t ,   p 2 . l a t )   & &   p . l a t   <   M a t h . m a x ( p 1 . l a t ,   p 2 . l a t ) )   {   / / r a y   i s   c r o s s i n g   o v e r   b y   t h e   a l g o r i t h m   ( c o m m o n   p a r t   o f )  
 	 	 	 	 i f   ( p . l n g   < =   M a t h . m a x ( p 1 . l n g ,   p 2 . l n g ) )   {   / / x   i s   b e f o r e   o f   r a y                                          
 	 	 	 	 	 i f   ( p 1 . l a t   = =   p 2 . l a t   & &   p . l n g   > =   M a t h . m i n ( p 1 . l n g ,   p 2 . l n g ) )   {   / / o v e r l i e s   o n   a   h o r i z o n t a l   r a y  
 	 	 	 	 	 	 r e t u r n   b o u n d O r V e r t e x ;  
 	 	 	 	 	 }  
  
 	 	 	 	 	 i f   ( p 1 . l n g   = =   p 2 . l n g )   {   / / r a y   i s   v e r t i c a l                                                  
 	 	 	 	 	 	 i f   ( p 1 . l n g   = =   p . l n g )   {   / / o v e r l i e s   o n   a   v e r t i c a l   r a y  
 	 	 	 	 	 	 	 r e t u r n   b o u n d O r V e r t e x ;  
 	 	 	 	 	 	 }   e l s e   {   / / b e f o r e   r a y  
 	 	 	 	 	 	 	 + + i n t e r s e c t C o u n t ;  
 	 	 	 	 	 	 }  
 	 	 	 	 	 }   e l s e   {   / / c r o s s   p o i n t   o n   t h e   l e f t   s i d e                                                  
 	 	 	 	 	 	 v a r   x i n t e r s   =   ( p . l a t   -   p 1 . l a t )   *   ( p 2 . l n g   -   p 1 . l n g )   /   ( p 2 . l a t   -   p 1 . l a t )   +   p 1 . l n g ;   / / c r o s s   p o i n t   o f   l n g                                                  
 	 	 	 	 	 	 i f   ( M a t h . a b s ( p . l n g   -   x i n t e r s )   <   p r e c i s i o n )   {   / / o v e r l i e s   o n   a   r a y  
 	 	 	 	 	 	 	 r e t u r n   b o u n d O r V e r t e x ;  
 	 	 	 	 	 	 }  
  
 	 	 	 	 	 	 i f   ( p . l n g   <   x i n t e r s )   {   / / b e f o r e   r a y  
 	 	 	 	 	 	 	 + + i n t e r s e c t C o u n t ;  
 	 	 	 	 	 	 }  
 	 	 	 	 	 }  
 	 	 	 	 }  
 	 	 	 }   e l s e   {   / / s p e c i a l   c a s e   w h e n   r a y   i s   c r o s s i n g   t h r o u g h   t h e   v e r t e x                                  
 	 	 	 	 i f   ( p . l a t   = =   p 2 . l a t   & &   p . l n g   < =   p 2 . l n g )   {   / / p   c r o s s i n g   o v e r   p 2                                          
 	 	 	 	 	 v a r   p 3   =   p t s [ ( i   +   1 )   %   N ] ;   / / n e x t   v e r t e x                                          
 	 	 	 	 	 i f   ( p . l a t   > =   M a t h . m i n ( p 1 . l a t ,   p 3 . l a t )   & &   p . l a t   < =   M a t h . m a x ( p 1 . l a t ,   p 3 . l a t ) )   {   / / p . l a t   l i e s   b e t w e e n   p 1 . l a t   &   p 3 . l a t  
 	 	 	 	 	 	 + + i n t e r s e c t C o u n t ;  
 	 	 	 	 	 }   e l s e   {  
 	 	 	 	 	 	 i n t e r s e c t C o u n t   + =   2 ;  
 	 	 	 	 	 }  
 	 	 	 	 }  
 	 	 	 }  
 	 	 	 p 1   =   p 2 ;   / / n e x t   r a y   l e f t   p o i n t  
 	 	 }  
  
 	 	 i f   ( i n t e r s e c t C o u n t   %   2   = =   0 )   {   / /PvepW(Y��_bY  
 	 	 	 r e t u r n   f a l s e ;  
 	 	 }   e l s e   {   / /YGepW(Y��_bQ�  
 	 	 	 r e t u r n   t r u e ;  
 	 	 }  
 	 }  
  
 	 / * *  
 	   *  \^��lSN:_'^�  
 	   *   @ p a r a m   { d e g r e e }   N u m b e r  ^�            
 	   *   @ r e t u r n s   { N u m b e r }  _'^�  
 	   * /  
 	 G e o U t i l s . d e g r e e T o R a d   =   f u n c t i o n ( d e g r e e )   {  
 	 	 r e t u r n   M a t h . P I   *   d e g r e e   /   1 8 0 ;  
 	 }  
  
 	 / * *  
 	   *  \_'^��lSN:^�  
 	   *   @ p a r a m   { r a d i a n }   N u m b e r  _'^�            
 	   *   @ r e t u r n s   { N u m b e r }  ^�  
 	   * /  
 	 G e o U t i l s . r a d T o D e g r e e   =   f u n c t i o n ( r a d )   {  
 	 	 r e t u r n   ( 1 8 0   *   r a d )   /   M a t h . P I ;  
 	 }  
  
 	 / * *  
 	   *  \ vP<�P[�W( a , bNK���~�^�Ou(  
 	   * /  
 	 f u n c t i o n   _ g e t R a n g e ( v ,   a ,   b )   {  
 	 	 i f   ( a   ! =   n u l l )   {  
 	 	 	 v   =   M a t h . m a x ( v ,   a ) ;  
 	 	 }  
 	 	 i f   ( b   ! =   n u l l )   {  
 	 	 	 v   =   M a t h . m i n ( v ,   b ) ;  
 	 	 }  
 	 	 r e t u r n   v ;  
 	 }  
  
 	 / * *  
 	   *  \ vP<�P[�W( a , bNK���~�^�Ou(  
 	   * /  
 	 f u n c t i o n   _ g e t L o o p ( v ,   a ,   b )   {  
 	 	 w h i l e   ( v   >   b )   {  
 	 	 	 v   - =   b   -   a  
 	 	 }  
 	 	 w h i l e   ( v   <   a )   {  
 	 	 	 v   + =   b   -   a  
 	 	 }  
 	 	 r e t u r n   v ;  
 	 }  
  
 	 / * *  
 	   *  ��{�N$p�NK��v���y� ,N$p�WPh_Ř{N:~�~�^�  
 	   *   @ p a r a m   { p o i n t 1 }   P o i n t  p�[��a  
 	   *   @ p a r a m   { p o i n t 2 }   P o i n t  p�[��a  
 	   *   @ r e t u r n s   { N u m b e r }  N$p�NK���y��SUOMN:|s  
 	   * /  
 	 G e o U t i l s . g e t D i s t a n c e   =   f u n c t i o n ( p o i n t 1 ,   p o i n t 2 )   {  
 	 	 / /R$e�|{W�  
 	 	 i f   ( ! ( p o i n t 1   i n s t a n c e o f   B M a p . P o i n t )   | |  
 	 	 	 ! ( p o i n t 2   i n s t a n c e o f   B M a p . P o i n t ) )   {  
 	 	 	 r e t u r n   0 ;  
 	 	 }  
  
 	 	 p o i n t 1 . l n g   =   _ g e t L o o p ( p o i n t 1 . l n g ,   - 1 8 0 ,   1 8 0 ) ;  
 	 	 p o i n t 1 . l a t   =   _ g e t R a n g e ( p o i n t 1 . l a t ,   - 7 4 ,   7 4 ) ;  
 	 	 p o i n t 2 . l n g   =   _ g e t L o o p ( p o i n t 2 . l n g ,   - 1 8 0 ,   1 8 0 ) ;  
 	 	 p o i n t 2 . l a t   =   _ g e t R a n g e ( p o i n t 2 . l a t ,   - 7 4 ,   7 4 ) ;  
  
 	 	 v a r   x 1 ,   x 2 ,   y 1 ,   y 2 ;  
 	 	 x 1   =   G e o U t i l s . d e g r e e T o R a d ( p o i n t 1 . l n g ) ;  
 	 	 y 1   =   G e o U t i l s . d e g r e e T o R a d ( p o i n t 1 . l a t ) ;  
 	 	 x 2   =   G e o U t i l s . d e g r e e T o R a d ( p o i n t 2 . l n g ) ;  
 	 	 y 2   =   G e o U t i l s . d e g r e e T o R a d ( p o i n t 2 . l a t ) ;  
  
 	 	 r e t u r n   E A R T H R A D I U S   *   M a t h . a c o s ( ( M a t h . s i n ( y 1 )   *   M a t h . s i n ( y 2 )   +   M a t h . c o s ( y 1 )   *   M a t h . c o s ( y 2 )   *   M a t h . c o s ( x 2   -   x 1 ) ) ) ;  
 	 }  
  
 	 / * *  
 	   *  ��{�b�~�b�p�ep~�v��^�  
 	   *   @ p a r a m   { P o l y l i n e | A r r a y < P o i n t > }   p o l y l i n e  b�~�[��ab�p�ep~�  
 	   *   @ r e t u r n s   { N u m b e r }  b�~�bp�ep~�[�^�v��^�  
 	   * /  
 	 G e o U t i l s . g e t P o l y l i n e D i s t a n c e   =   f u n c t i o n ( p o l y l i n e )   {  
 	 	 / /h�g�|{W�  
 	 	 i f   ( p o l y l i n e   i n s t a n c e o f   B M a p . P o l y l i n e   | |  
 	 	 	 p o l y l i n e   i n s t a n c e o f   A r r a y )   {  
 	 	 	 / /\ p o l y l i n e~�N N:ep~�  
 	 	 	 v a r   p t s ;  
 	 	 	 i f   ( p o l y l i n e   i n s t a n c e o f   B M a p . P o l y l i n e )   {  
 	 	 	 	 p t s   =   p o l y l i n e . g e t P a t h ( ) ;  
 	 	 	 }   e l s e   {  
 	 	 	 	 p t s   =   p o l y l i n e ;  
 	 	 	 }  
  
 	 	 	 i f   ( p t s . l e n g t h   <   2 )   {   / /\N� 2N*p����V� 0  
 	 	 	 	 r e t u r n   0 ;  
 	 	 	 }  
  
 	 	 	 / /�MS�b@g	~�k�\Qvv�R����{�etga~�k�v��^�  
 	 	 	 v a r   t o t a l D i s   =   0 ;  
 	 	 	 f o r   ( v a r   i   =   0 ;   i   <   p t s . l e n g t h   -   1 ;   i + + )   {  
 	 	 	 	 v a r   c u r P t   =   p t s [ i ] ;  
 	 	 	 	 v a r   n e x t P t   =   p t s [ i   +   1 ]  
 	 	 	 	 v a r   d i s   =   G e o U t i l s . g e t D i s t a n c e ( c u r P t ,   n e x t P t ) ;  
 	 	 	 	 t o t a l D i s   + =   d i s ;  
 	 	 	 }  
  
 	 	 	 r e t u r n   t o t a l D i s ;  
  
 	 	 }   e l s e   {  
 	 	 	 r e t u r n   0 ;  
 	 	 }  
 	 }  
  
 	 / * *  
 	   *  ��{�Y��_b�bbp�ep~�g�^�V�_bv��by� ,l�a�WPh|{W�S��f/~�~�^��NN�T��{���v�N�Y��_bv��by�  
 	   *   @ p a r a m   { P o l y g o n | A r r a y < P o i n t > }   p o l y g o n  Y��_b�b[��ab�p�ep~�  
 	   *   @ r e t u r n s   { N u m b e r }  Y��_b�bbp�ep~�g�bV�_bv��by�  
 	   * /  
 	 G e o U t i l s . g e t P o l y g o n A r e a   =   f u n c t i o n ( p o l y g o n )   {  
 	 	 / /h�g�|{W�  
 	 	 i f   ( ! ( p o l y g o n   i n s t a n c e o f   B M a p . P o l y g o n )   & &  
 	 	 	 ! ( p o l y g o n   i n s t a n c e o f   A r r a y ) )   {  
 	 	 	 r e t u r n   0 ;  
 	 	 }  
 	 	 v a r   p t s ;  
 	 	 i f   ( p o l y g o n   i n s t a n c e o f   B M a p . P o l y g o n )   {  
 	 	 	 p t s   =   p o l y g o n . g e t P a t h ( ) ;  
 	 	 }   e l s e   {  
 	 	 	 p t s   =   p o l y g o n ;  
 	 	 }  
  
 	 	 i f   ( p t s . l e n g t h   <   3 )   {   / /\N� 3N*�vp��N��g�^��b  
 	 	 	 r e t u r n   0 ;  
 	 	 }  
  
 	 	 v a r   t o t a l A r e a   =   0 ;   / /RY�S`;�by�  
 	 	 v a r   L o w X   =   0 . 0 ;  
 	 	 v a r   L o w Y   =   0 . 0 ;  
 	 	 v a r   M i d d l e X   =   0 . 0 ;  
 	 	 v a r   M i d d l e Y   =   0 . 0 ;  
 	 	 v a r   H i g h X   =   0 . 0 ;  
 	 	 v a r   H i g h Y   =   0 . 0 ;  
 	 	 v a r   A M   =   0 . 0 ;  
 	 	 v a r   B M   =   0 . 0 ;  
 	 	 v a r   C M   =   0 . 0 ;  
 	 	 v a r   A L   =   0 . 0 ;  
 	 	 v a r   B L   =   0 . 0 ;  
 	 	 v a r   C L   =   0 . 0 ;  
 	 	 v a r   A H   =   0 . 0 ;  
 	 	 v a r   B H   =   0 . 0 ;  
 	 	 v a r   C H   =   0 . 0 ;  
 	 	 v a r   C o e f f i c i e n t L   =   0 . 0 ;  
 	 	 v a r   C o e f f i c i e n t H   =   0 . 0 ;  
 	 	 v a r   A L t a n g e n t   =   0 . 0 ;  
 	 	 v a r   B L t a n g e n t   =   0 . 0 ;  
 	 	 v a r   C L t a n g e n t   =   0 . 0 ;  
 	 	 v a r   A H t a n g e n t   =   0 . 0 ;  
 	 	 v a r   B H t a n g e n t   =   0 . 0 ;  
 	 	 v a r   C H t a n g e n t   =   0 . 0 ;  
 	 	 v a r   A N o r m a l L i n e   =   0 . 0 ;  
 	 	 v a r   B N o r m a l L i n e   =   0 . 0 ;  
 	 	 v a r   C N o r m a l L i n e   =   0 . 0 ;  
 	 	 v a r   O r i e n t a t i o n V a l u e   =   0 . 0 ;  
 	 	 v a r   A n g l e C o s   =   0 . 0 ;  
 	 	 v a r   S u m 1   =   0 . 0 ;  
 	 	 v a r   S u m 2   =   0 . 0 ;  
 	 	 v a r   C o u n t 2   =   0 ;  
 	 	 v a r   C o u n t 1   =   0 ;  
 	 	 v a r   S u m   =   0 . 0 ;  
 	 	 v a r   R a d i u s   =   E A R T H R A D I U S ;   / / 6 3 7 8 1 3 7 . 0 , W G S 8 4i-tSJ_�    
 	 	 v a r   C o u n t   =   p t s . l e n g t h ;  
 	 	 f o r   ( v a r   i   =   0 ;   i   <   C o u n t ;   i + + )   {  
 	 	 	 i f   ( i   = =   0 )   {  
 	 	 	 	 L o w X   =   p t s [ C o u n t   -   1 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 L o w Y   =   p t s [ C o u n t   -   1 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e X   =   p t s [ 0 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e Y   =   p t s [ 0 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h X   =   p t s [ 1 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h Y   =   p t s [ 1 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 }   e l s e   i f   ( i   = =   C o u n t   -   1 )   {  
 	 	 	 	 L o w X   =   p t s [ C o u n t   -   2 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 L o w Y   =   p t s [ C o u n t   -   2 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e X   =   p t s [ C o u n t   -   1 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e Y   =   p t s [ C o u n t   -   1 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h X   =   p t s [ 0 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h Y   =   p t s [ 0 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 }   e l s e   {  
 	 	 	 	 L o w X   =   p t s [ i   -   1 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 L o w Y   =   p t s [ i   -   1 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e X   =   p t s [ i ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 M i d d l e Y   =   p t s [ i ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h X   =   p t s [ i   +   1 ] . l n g   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 	 H i g h Y   =   p t s [ i   +   1 ] . l a t   *   M a t h . P I   /   1 8 0 ;  
 	 	 	 }  
 	 	 	 A M   =   M a t h . c o s ( M i d d l e Y )   *   M a t h . c o s ( M i d d l e X ) ;  
 	 	 	 B M   =   M a t h . c o s ( M i d d l e Y )   *   M a t h . s i n ( M i d d l e X ) ;  
 	 	 	 C M   =   M a t h . s i n ( M i d d l e Y ) ;  
 	 	 	 A L   =   M a t h . c o s ( L o w Y )   *   M a t h . c o s ( L o w X ) ;  
 	 	 	 B L   =   M a t h . c o s ( L o w Y )   *   M a t h . s i n ( L o w X ) ;  
 	 	 	 C L   =   M a t h . s i n ( L o w Y ) ;  
 	 	 	 A H   =   M a t h . c o s ( H i g h Y )   *   M a t h . c o s ( H i g h X ) ;  
 	 	 	 B H   =   M a t h . c o s ( H i g h Y )   *   M a t h . s i n ( H i g h X ) ;  
 	 	 	 C H   =   M a t h . s i n ( H i g h Y ) ;  
 	 	 	 C o e f f i c i e n t L   =   ( A M   *   A M   +   B M   *   B M   +   C M   *   C M )   /   ( A M   *   A L   +   B M   *   B L   +   C M   *   C L ) ;  
 	 	 	 C o e f f i c i e n t H   =   ( A M   *   A M   +   B M   *   B M   +   C M   *   C M )   /   ( A M   *   A H   +   B M   *   B H   +   C M   *   C H ) ;  
 	 	 	 A L t a n g e n t   =   C o e f f i c i e n t L   *   A L   -   A M ;  
 	 	 	 B L t a n g e n t   =   C o e f f i c i e n t L   *   B L   -   B M ;  
 	 	 	 C L t a n g e n t   =   C o e f f i c i e n t L   *   C L   -   C M ;  
 	 	 	 A H t a n g e n t   =   C o e f f i c i e n t H   *   A H   -   A M ;  
 	 	 	 B H t a n g e n t   =   C o e f f i c i e n t H   *   B H   -   B M ;  
 	 	 	 C H t a n g e n t   =   C o e f f i c i e n t H   *   C H   -   C M ;  
 	 	 	 A n g l e C o s   =   ( A H t a n g e n t   *   A L t a n g e n t   +   B H t a n g e n t   *   B L t a n g e n t   +   C H t a n g e n t   *   C L t a n g e n t )   /   ( M a t h . s q r t ( A H t a n g e n t   *   A H t a n g e n t   +   B H t a n g e n t   *   B H t a n g e n t   +   C H t a n g e n t   *   C H t a n g e n t )   *   M a t h . s q r t ( A L t a n g e n t   *   A L t a n g e n t   +   B L t a n g e n t   *   B L t a n g e n t   +   C L t a n g e n t   *   C L t a n g e n t ) ) ;  
 	 	 	 A n g l e C o s   =   M a t h . a c o s ( A n g l e C o s ) ;  
 	 	 	 A N o r m a l L i n e   =   B H t a n g e n t   *   C L t a n g e n t   -   C H t a n g e n t   *   B L t a n g e n t ;  
 	 	 	 B N o r m a l L i n e   =   0   -   ( A H t a n g e n t   *   C L t a n g e n t   -   C H t a n g e n t   *   A L t a n g e n t ) ;  
 	 	 	 C N o r m a l L i n e   =   A H t a n g e n t   *   B L t a n g e n t   -   B H t a n g e n t   *   A L t a n g e n t ;  
 	 	 	 i f   ( A M   ! =   0 )  
 	 	 	 	 O r i e n t a t i o n V a l u e   =   A N o r m a l L i n e   /   A M ;  
 	 	 	 e l s e   i f   ( B M   ! =   0 )  
 	 	 	 	 O r i e n t a t i o n V a l u e   =   B N o r m a l L i n e   /   B M ;  
 	 	 	 e l s e  
 	 	 	 	 O r i e n t a t i o n V a l u e   =   C N o r m a l L i n e   /   C M ;  
 	 	 	 i f   ( O r i e n t a t i o n V a l u e   >   0 )   {  
 	 	 	 	 S u m 1   + =   A n g l e C o s ;  
 	 	 	 	 C o u n t 1 + + ;  
 	 	 	 }   e l s e   {  
 	 	 	 	 S u m 2   + =   A n g l e C o s ;  
 	 	 	 	 C o u n t 2 + + ;  
 	 	 	 }  
 	 	 }  
 	 	 v a r   t e m p S u m 1 ,   t e m p S u m 2 ;  
 	 	 t e m p S u m 1   =   S u m 1   +   ( 2   *   M a t h . P I   *   C o u n t 2   -   S u m 2 ) ;  
 	 	 t e m p S u m 2   =   ( 2   *   M a t h . P I   *   C o u n t 1   -   S u m 1 )   +   S u m 2 ;  
 	 	 i f   ( S u m 1   >   S u m 2 )   {  
 	 	 	 i f   ( ( t e m p S u m 1   -   ( C o u n t   -   2 )   *   M a t h . P I )   <   1 )  
 	 	 	 	 S u m   =   t e m p S u m 1 ;  
 	 	 	 e l s e  
 	 	 	 	 S u m   =   t e m p S u m 2 ;  
 	 	 }   e l s e   {  
 	 	 	 i f   ( ( t e m p S u m 2   -   ( C o u n t   -   2 )   *   M a t h . P I )   <   1 )  
 	 	 	 	 S u m   =   t e m p S u m 2 ;  
 	 	 	 e l s e  
 	 	 	 	 S u m   =   t e m p S u m 1 ;  
 	 	 }  
 	 	 t o t a l A r e a   =   ( S u m   -   ( C o u n t   -   2 )   *   M a t h . P I )   *   R a d i u s   *   R a d i u s ;  
  
 	 	 r e t u r n   t o t a l A r e a ;   / /��V�`;�by�  
 	 }  
  
 } ) ( ) ;   / /��S~�g_